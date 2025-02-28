// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { SettingPair } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type ResponseType = SettingPair[]

const module = async <Response extends ResponseType>(ctx: ShellSdkContext): Promise<Response> => {
    return await ctx.request("query", "settingValues", ["alias", "value", "updated_at", "disabled"])
}

export default module<ResponseType>
