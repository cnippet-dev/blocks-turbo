// @ts-nocheck -- skip type checking
import * as docs_2 from "../content/blocks/hero.mdx?collection=docs"
import * as docs_1 from "../content/blocks/blog.mdx?collection=docs"
import * as docs_0 from "../content/blocks/banner.mdx?collection=docs"
import { _runtime } from "fumadocs-mdx/runtime/next"
import * as _source from "../source.config"
export const docs = _runtime.docs<typeof _source.docs>([{ info: {"path":"banner.mdx","fullPath":"content\\blocks\\banner.mdx"}, data: docs_0 }, { info: {"path":"blog.mdx","fullPath":"content\\blocks\\blog.mdx"}, data: docs_1 }, { info: {"path":"hero.mdx","fullPath":"content\\blocks\\hero.mdx"}, data: docs_2 }], [])