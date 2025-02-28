// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { Organization, OrganizationRegisterInput } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { input: OrganizationRegisterInput }
export type ResponseType = Organization

const module = async <Input extends InputType, Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
): Promise<Response> => {
    return await ctx.request(
        "mutation",
        "organizationRegister",
        [
            "id",
            "title",
            "phone",
            "email",
            "address",
            "hosts_count",
            "verified_at",
            "activated_at",
            "banned_at",
            "created_at",
            "updated_at",
            "deleted_at",
        ],
        { ...(props as any) },
    )
}

export default module<InputType, ResponseType>
