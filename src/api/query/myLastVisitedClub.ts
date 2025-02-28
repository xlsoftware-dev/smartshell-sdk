// deno-lint-ignore-file no-unused-vars ban-unused-ignore no-explicit-any
import type { ShellSdkContext } from "../../types/sdk.ts"
import type { ClientClub } from "../../types/types.ts"
import { key } from "../../utils/key.ts"

export type ResponseType = ClientClub

const module = async <Response extends ResponseType>(ctx: ShellSdkContext): Promise<Response> => {
    return await ctx.request("query", "myLastVisitedClub", [
        "id",
        "name",
        "address",
        "city",
        "deposit",
        "discount",
        "hours",
        key("visits", ["visited_at", "client_session_id"]),
        "last_visited_at",
        "accept_payments",
        "accept_sbp",
        "booking_enabled",
        key("booking_settings", [
            "self_cancellation_enabled",
            "cancellation_penalty",
            "cancellation_free_headroom",
            "online_booking_discount",
        ]),
        key("currency", ["id", "title", "alias", "letter"]),
        "rules",
        key("achievements", [
            key("single", [
                "id",
                "has",
                "name",
                "icon_url",
                key("conditions", ["name", "value"]),
                key("rewards", ["name", "value"]),
                "progress",
            ]),
            key("continuous", [
                "id",
                "has",
                "name",
                "icon_url",
                key("conditions", ["name", "value"]),
                key("rewards", ["name", "value"]),
                "progress",
            ]),
        ]),
        "feedback_available",
        "club_phone",
        "url",
        "vk_url",
        "telegram_url",
        "whats_up_url",
        "region",
        "comment",
        "country",
        "lat",
        "lng",
        key("work_schedule", ["day", "Start", "End"]),
        "work_schedule_247",
        key("hardware", [
            "hall_title",
            "device_count",
            "console_model",
            "processor_brand",
            "processor_model",
            "gpu_brand",
            "gpu_model",
            "ram_size",
            "ram_type",
            "hdd_type",
            "keyboard",
            "mouse",
            "speakers",
            "chair",
            "monitor_brand",
            "monitor_size",
            "monitor_hz",
        ]),
        "logo_url",
        "header_url",
        "pricelist_urls",
        "interior_urls",
        key("services", [
            "has_vr",
            "vr_count",
            "vr_model",
            "has_autosim",
            "autosim_count",
            "has_printer",
            "has_lounge",
            "has_gifts",
            "personal_devices_allowed",
            "has_streaming_boot",
            "personal_food_allowed",
            "has_tabletop_games",
            "can_rent_projector",
            "has_coworking",
            "has_snacks",
            "has_energy_drinks",
            "has_food_to_go",
            "has_kitchen",
            "has_beverages",
            "has_low_alcohol_beverages",
            "has_food_discounts",
            "accept_cash",
            "accept_card",
            "accept_qr",
            "accept_sbp",
        ]),
        "info",
        "host_count",
        "available_host_count",
        key("cashback", ["amount", "is_percent", "value"]),
        "user_bonus",
    ])
}

export default module<ResponseType>
