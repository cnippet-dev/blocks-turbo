"use server"

import { registryItemSchema } from "@/registry/schema"
import { z } from "zod"

export async function getAllBlockIds(
  types: z.infer<typeof registryItemSchema>["type"][] = [
    "registry:block",
    "registry:internal",
  ],
  categories: string[] = []
): Promise<string[]> {
  const blocks = await getAllBlocks(types, categories)

  return blocks.map((block) => block.name)
}

export async function getAllBlocks(
  types: z.infer<typeof registryItemSchema>["type"][] = [
    "registry:block",
    "registry:internal",
  ],
  categories: string[] = []
) {
  const { Index } = await import("@/__registry__/index")
  const index = z.record(z.string(), registryItemSchema).parse(Index)

  // Debug logging
  console.log("=== getAllBlocks DEBUG ===")
  console.log("Types filter:", types)
  console.log("Categories filter:", categories)
  console.log("Total blocks in index:", Object.keys(index).length)
  
  const filteredBlocks = Object.values(index).filter((block) => {
    const typeMatch = types.includes(block.type)
    
    // Enhanced category matching - check multiple sources
    let categoryMatch = true
    if (categories.length > 0) {
      categoryMatch = 
        // Check explicit categories property
        (block.categories && block.categories.some((category) => categories.includes(category))) ||
        // Check if block name matches any category
        categories.some(cat => block.name.includes(cat)) ||
        // Check if any file path contains the category
        block.files?.some(file => 
          categories.some(cat => file.path.toLowerCase().includes(cat.toLowerCase()))
        ) ||
        // Check if block name starts with category (e.g., "hero-1" matches "hero")
        categories.some(cat => block.name.startsWith(cat.replace(/\d+$/, '')))
    }
    
    const notChart = !block.name.startsWith("chart-")
    
    // Debug individual block filtering
    if (categories.length > 0) {
      console.log(`Block ${block.name}:`, {
        type: block.type,
        typeMatch,
        categories: block.categories,
        nameIncludesCategory: categories.some(cat => block.name.includes(cat)),
        pathIncludesCategory: block.files?.some(file => 
          categories.some(cat => file.path.toLowerCase().includes(cat.toLowerCase()))
        ),
        nameStartsWithCategory: categories.some(cat => block.name.startsWith(cat.replace(/\d+$/, ''))),
        categoryMatch,
        notChart,
        passes: typeMatch && categoryMatch && notChart
      })
    }
    
    return typeMatch && categoryMatch && notChart
  })
  
  console.log("Filtered blocks count:", filteredBlocks.length)
  console.log("Filtered block names:", filteredBlocks.map(b => b.name))
  console.log("==========================")
  
  return filteredBlocks
}
