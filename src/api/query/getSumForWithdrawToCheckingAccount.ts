// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { BeneficiaryBalance } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { beneficiary_id: string }
export type ResponseType = BeneficiaryBalance

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request(
        "query",
        "getSumForWithdrawToCheckingAccount",
        ["balance", "commission", "sum", "net_sum", "locked"],
        { ...(props as any) },
    )
}

export default module<InputType, ResponseType>
