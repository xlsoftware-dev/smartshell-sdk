// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext, ShellSdkPaginatorInput } from "../../types/sdk.ts"
import type { EventListPaginated, EventsInput } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type InputType = { paginator?: ShellSdkPaginatorInput; input?: EventsInput }
export type ResponseType = EventListPaginated

const module = async <Input extends InputType["input"], Response extends ResponseType>(
    ctx: ShellSdkContext,
    props: Input,
    paginator?: ShellSdkPaginatorInput,
): Promise<Response> => {
    return await ctx.request(
        "query",
        "eventList",
        [
            key("data", [
                "timestamp",
                "type",
                "description",
                key("settings", ["alias", "value", "value2"]),
                key("setting", ["alias", "value", "value2"]),
                key("booking", ["id", "Cost", "from", "to"]),
                key("cash_order", ["id", "created_at", "sum", "comment"]),
                key("client_session", [
                    "id",
                    "elapsed",
                    "finished_at",
                    "time_left",
                    "expires_at",
                    "is_per_minute",
                    "total_cost",
                ]),
                key("promocode", ["id", "title", "value"]),
                key("discount", ["id", "title", "value"]),
                key("good", ["id", "title"]),
                key("service", ["id", "title"]),
                key("tariff", ["id", "title"]),
                key("host", ["id", "title", "value"]),
                key("host2", ["id", "title", "value"]),
                key("hosts", ["id", "title", "value"]),
                key("host_group", ["id", "title"]),
                key("host_group2", ["id", "title"]),
                key("host_command", ["id", "title"]),
                key("client", ["uuid", "phone", "email", "nickname", "first_name", "last_name"]),
                key("manager", ["uuid", "phone", "email", "nickname", "first_name", "last_name"]),
                key("operator", ["uuid", "phone", "email", "nickname", "first_name", "last_name"]),
                key("worker", ["uuid", "phone", "email", "nickname", "first_name", "last_name"]),
                key("role", ["id", "title"]),
                key("role2", ["id", "title"]),
                key("user_group", ["id", "title", "value"]),
                key("user_group2", ["id", "title", "value"]),
                key("payment", ["id", "title", "value"]),
                key("payment_items", ["id", "entity_id", "entity_type", "title", "amount", "sum"]),
                key("warehouse_item", ["id", "entity_id", "entity_type", "title", "value", "value2"]),
                key("work_shift", ["id", "timestamp"]),
                key("worker_task", ["id", "creator_uuid", "assigned_to_uuid", "title", "deadline_at"]),
                key("goods", ["id", "title"]),
                key("new_goods_amount", ["id", "value"]),
                key("new_devices", ["alias", "value", "value2"]),
                "cash_on_start",
                "cashback",
                "paused_type",
                "additional_seconds",
                "send_code_method",
                "penalty",
                "value1",
                "value2",
                "comment",
                "duration",
                "deposit",
                key("combo", ["id", "title", "host_group_id", "host_group_title", "tariff_id", "tariff_title"]),
                key("combo_items", ["id", "entity_id", "entity_type", "title", "amount", "price"]),
            ]),
        ],
        { input: props },
        paginator || { page: 1 },
    )
}

export default module<InputType["input"], ResponseType>
