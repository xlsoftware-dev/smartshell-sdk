// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { DepositCashback, DepositCashbackInput } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { id: number; input: DepositCashbackInput }
export type ResponseType = DepositCashback

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request(
        "mutation",
        "updateDepositCashback",
        ["id", "amount", "value", "is_percent", "is_active", "starts_at", "expires_at", "is_expired"],
        { ...(props as any) },
    )
}

export default module<InputType, ResponseType>
