import { NextResponse } from "next/server"
import fs from "node:fs/promises"
import path from "node:path"

import { getRegistryItem } from "@/lib/registry"
import { highlightCode } from "@/lib/highlight-code"

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const name = searchParams.get("name") ?? undefined
    const src = searchParams.get("src") ?? undefined
    const indexParam = searchParams.get("index")
    const fileIndex = indexParam ? Number(indexParam) : 0

    if (!name && !src) {
      return NextResponse.json(
        { error: "Provide either 'name' or 'src' query param" },
        { status: 400 }
      )
    }

    let code: string | undefined
    let title: string | undefined

    if (name) {
      const item = await getRegistryItem(name)
      const file = item?.files?.[fileIndex]
      code = file?.content
      title = file?.path?.split("/").pop()
    }

    if (!code && src) {
      const abs = path.join(process.cwd(), src)
      code = await fs.readFile(abs, "utf-8")
      title = src.split("/").pop()
    }

    if (!code) {
      return NextResponse.json({ error: "Source not found" }, { status: 404 })
    }

    const language = (title?.split(".").pop() ?? "tsx").toLowerCase()
    const highlightedCode = await highlightCode(code, language)

    return NextResponse.json({ code, highlightedCode, language, title })
  } catch (error) {
    console.error("/api/registry/source error", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}


