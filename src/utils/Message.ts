import {ElMessage} from "element-plus";

/**
 * 通知消息
 * @param msg
 */
const info: (msg: string) => void = (msg: string) => {
    ElMessage({
        showClose: true,
        message: msg
    });
};

/**
 * 成功消息
 * @param msg
 */
const success: (msg: string) => void = (msg: string) => {
    ElMessage({
        showClose: true,
        message: msg,
        type: "success",
    });
};

/**
 * 警告消息
 * @param msg
 */
const warning: (msg: string) => void = (msg: string) => {
    ElMessage({
        showClose: true,
        message: msg,
        type: "warning",
    });
};

/**
 * 错误消息
 * @param msg
 */
const error: (msg: string) => void = (msg: string) => {
    ElMessage({
        showClose: true,
        message: msg,
        type: "error",
    });
};


export const Message = {
    info: info,
    success: success,
    warning: warning,
    error: error
};