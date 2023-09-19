import "./listNotifications.scss"
import NotificationsItem from "../notificationsItem/NotificationsItem"

const ListNotifications = () => {
    return (
        <div className="listNotifications">
            <NotificationsItem />
            <NotificationsItem />
            <NotificationsItem />
            <NotificationsItem />
        </div>
    );
};

export default ListNotifications;