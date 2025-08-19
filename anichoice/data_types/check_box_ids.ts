const game_setting_ids = {
    BLUR_SETTING_ID: "blur-setting",
    BLINK_SETTING_ID: "blink-setting",
    PIXEL_SETTING_ID: "pixel-setting",
    GRAYSCALE_SETTING_ID: "grayscale-setting",
    ZOOM_SETTING_ID: "zoom-setting",
    SPIN_SETTING_ID: "spin-setting",
    MINI_SETTING_ID: "mini-setting"
} as const;


type GameSettingId = typeof game_setting_ids[keyof typeof game_setting_ids];

export default game_setting_ids;

export type { GameSettingId };
