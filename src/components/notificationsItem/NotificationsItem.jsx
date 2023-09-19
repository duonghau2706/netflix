import { useState } from "react";
import "./notificationsItem.scss"

const NotificationsItem = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHoverNotifications = () => {
        setIsHovered(true);
    }

    const handleLeaveNotifications = () => {
        setIsHovered(false);
    }



    return (
        <div className="notificationsItem" onMouseOver={handleHoverNotifications} onMouseLeave={handleLeaveNotifications} style={{ backgroundColor: (isHovered && "rgba(0, 0, 0)") }}>
            <img src="https://dnm.nflximg.net/api/v6/kvDymu0eXRyicIuSUzvRrxrm5dU/AAAABQo4bWmDKROnwB8Bx8JoIMkoAsmCCNxdAWlZBUDuc7qHT1L2Smbjmgoi4H5sOyJ3wZak1_xFKy1WGuvSKAhvK6hsr0DUFx0vhdmdnwq_9hNWd_XyS7HGL3Dc5z08LxB43xk5SJ0yMeEGTQY.jpg?r=420" alt="" />
            <div className="notificationsItem-wrapper">
                <div className="notificationsItem-content">
                    <span>Nội dung mới</span>
                    <span>Ito Junji: Những câu chuyện rùng rợn từ Nhật Bản</span>
                </div>
                <div className="notificationsItem-subcontent">
                    <span style={{ fontSize: 12 }}>cách đây 2 tuần</span>
                </div>
            </div>
        </div>
    );
};

export default NotificationsItem;