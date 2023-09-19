import classes from "./settings.module.scss";
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { ArrowDropDown } from "@material-ui/icons";
import { AiOutlineWarning } from "react-icons/ai"
import Checkbox from "react-custom-checkbox";
import * as Icon from "react-icons/fi";
import { ImCheckboxChecked } from "react-icons/im"
import { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { settingActions } from "../../store";
import { Link } from "react-router-dom";

const Settings = () => {
    const dispatch = useDispatch();
    const enteredName = useSelector(state => state.setting.enteredName);
    const enteredNickName = useSelector(state => state.setting.enteredNickName);
    const isTooShort = useSelector(state => state.setting.isTooShort);
    const isTooLong = useSelector(state => state.setting.isTooLong);
    const isValid = useSelector(state => state.setting.isValid);
    const isShowLimit = useSelector(state => state.setting.isShowLimit);
    const currentLenght = useSelector(state => state.setting.currentLenght);

    // const initialState = {
    //     enteredName: 'Autumn',
    //     enteredNickName: '',
    //     isValid: false,
    //     isTouched: false,
    //     isShow: false,
    //     currentLenght: 0
    // }

    // const nickNameReducer = (state = initialState, action) => {
    //     if (action.type === "NameChange") {
    //         return {
    //             enteredName: action.value,
    //             enteredNickName: state.enteredNickName,
    //             isValid: state.isValid,
    //             isTouched: state.isTouched,
    //             isShow: state.isShow,
    //             currentLenght: state.currentLenght
    //         };
    //     }
    //     if (action.type === "NickNameChange") {
    //         return {
    //             enteredName: state.enteredName,
    //             enteredNickName: action.value,
    //             isValid: state.isValid,
    //             isTouched: state.isTouched,
    //             isShow: state.isShow,
    //             currentLenght: action.value.length
    //         };
    //     }
    //     if (action.type === "NickNameBlur") {
    //         return {
    //             enteredName: state.enteredName,
    //             enteredNickName: state.enteredNickName,
    //             isValid: state.isValid,
    //             isTouched: true,
    //             isShow: state.isShow,
    //             currentLenght: state.currentLenght
    //         };
    //     }
    //     if (action.type === "NickNameClick") {
    //         return {
    //             enteredName: state.enteredName,
    //             enteredNickName: state.enteredNickName,
    //             isValid: state.isValid,
    //             isTouched: state.isTouched,
    //             isShow: true,
    //             currentLenght: state.currentLenght
    //         };
    //     }
    //     return state;
    // }

    // const [state, dispatch] = useReducer(nickNameReducer, initialState);


    const nameChangeHandler = event => {
        dispatch(settingActions.nameChange(event.target.value));
        // dispatch({ type: "NameChange", value: event.target.value })
    }

    const nickNameChangeHandler = event => {
        dispatch(settingActions.nickNameChange(event.target.value));
        // dispatch({ type: "NickNameChange", value: event.target.value })
    }

    const nickNameBlurHandle = () => {
        dispatch(settingActions.nickNameBlur());

        // dispatch({ type: "NickNameBlur" });
    }

    const nickNameClickHandler = () => {
        dispatch(settingActions.nickNameClick());
        // dispatch({ type: "NickNameClick" });
    }

    return (
        <div className={classes.settings}>
            <div className={classes.header}>
                <h1 className={classes.title}>Chỉnh sửa hồ sơ</h1>
            </div>
            <div className={classes.main}>
                <div className={classes.left}>
                    <img src="data:image/jpeg;base64,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" alt="" />
                    <BorderColorOutlinedIcon className={classes.icon} />
                </div>
                <div className={classes.right}>
                    <input
                        type="text"
                        className={classes.name}
                        value={enteredName}
                        onChange={nameChangeHandler}
                        onBlur={nickNameBlurHandle} />
                    <div className={classes["language-wrapper"]}>
                        <h2 className={classes["title-language"]}>Ngôn ngữ:</h2>
                        <div className={classes["options-language-wrapper"]}>
                            <select className={classes["options-languge"]} defaultValue="vietnamese">
                                <option value="indonesia">Bahasa Indonesia</option>
                                <option value="indonesia">Bahasa Indonesia</option>
                                <option value="melayu">Bahasa Melayu</option>
                                <option value="dansk">Dansk</option>
                                <option value="english">English</option>
                                <option value="vietnamese" >Vietnamese</option>
                            </select>
                            {/* <ArrowDropDown className={classes.arrow} /> */}
                        </div>
                    </div>
                    <div className={classes["nickname-wrapper"]}>
                        <h2 className={classes["title-nickname"]}>Biệt hiệu trong trò chơi:</h2>
                        <p className={classes["subtitle-nickname"]}>Biệt hiệu khác của bạn là một cái tên đặc biệt, sẽ được sử dụng để chơi cùng các thành viên Netflix khác xuyên suốt các trò chơi Netflix. <b style={{ cursor: "pointer" }}>Tìm hiểu thêm</b> </p>
                        <input
                            type="text"
                            className={isTooShort || isTooLong ? classes["input-unvalid"] : `${isValid ? classes["input-valid"] : undefined}`}
                            placeholder="Tạo biệt hiệu trong trò chơi"
                            value={enteredNickName}
                            onChange={nickNameChangeHandler}
                            onClick={nickNameClickHandler}
                        />
                        <div className={classes.wrapper}>
                            {isTooShort &&
                                <div className={classes["unvalid-wrapper"]}>
                                    <AiOutlineWarning size={20} className={classes.icon} />
                                    <span className={classes["unvalid-nickname"]}>Phải dài hơn 2 kí tự</span>
                                </div>
                            }
                            {isTooLong &&
                                <div className={classes["unvalid-wrapper"]}>
                                    <AiOutlineWarning size={20} className={classes.icon} />
                                    <span className={classes["unvalid-nickname"]}>Phải ngắn hơn 16 kí tự</span>
                                </div>
                            }
                            {isValid && <span className={classes["valid-nickname"]}>Khả dụng</span>}
                            {isShowLimit && <div className={classes["limit-nickname"]}>{currentLenght}/16</div>}
                        </div>
                    </div>
                    <div className={classes["age-wrapper"]}>
                        <h2 className={classes["title-age"]}>Cài đặt độ tuổi:</h2>
                        <div className={classes["limit-age"]}>Mọi độ tuổi</div>
                        <p className={classes["subtitle-age"]}>Hiển thị phim và chương trình ở <b>mọi độ tuổi</b> cho hồ sơ này.</p>
                        <button className={classes["setting-age"]}>Chỉnh sửa</button>
                    </div>
                    <div className={classes["autoplay-wrapper"]}>
                        <h2>Điều chỉnh tự động phát</h2>
                        <div className={classes["autoplay-option"]}>
                            <div className={classes.option}>
                                <Checkbox
                                    icon={<Icon.FiCheck color="#CCCCCC" size={14} />}
                                    checked={true}
                                    size={30}
                                    style={{ cursor: "pointer", borderRadius: "none", border: "1px solid #99a1a7" }}
                                />
                                <span>Tự động phát tập tiếp theo của một loạt phim trên tất cả các thiết bị.</span>
                            </div>
                            <div className={classes.option}>
                                <Checkbox
                                    icon={<Icon.FiCheck color="#CCCCCC" size={14} />}
                                    checked={true}
                                    size={30}
                                    style={{ cursor: "pointer", borderRadius: "none", border: "1px solid #99a1a7", marginLeft: 0 }} />
                                <span>Tự động phát nội dung xem trước trong khi duyệt tìm trên tất cả các thiết bị.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.footer}>
                <a href="/home">
                    <button className={classes.save}>Lưu</button>
                </a>
                <Link to="/home">
                    <button className={classes.cancel}>Hủy</button>
                </Link>
            </div>
        </div>
    );
};

export default Settings;