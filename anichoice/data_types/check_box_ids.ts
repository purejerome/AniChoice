const game_setting_ids = {
    BLUR_SETTING_ID: "blur",
    BLINK_SETTING_ID: "blink_and_miss",
    PIXEL_SETTING_ID: "pixel",
    GRAYSCALE_SETTING_ID: "grayscale",
    ZOOM_SETTING_ID: "zoom",
    SPIN_SETTING_ID: "spin",
    MINI_SETTING_ID: "mini"
} as const;


type GameSettingId = typeof game_setting_ids[keyof typeof game_setting_ids];

export default game_setting_ids;

export type { GameSettingId };
