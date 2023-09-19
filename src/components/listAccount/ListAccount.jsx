import AccountItem from "../accountItem/AccountItem";
import classes from "./listAccount.module.scss";

const ListAccount = () => {
    return (
        <div className={classes.listAccount}>
            <AccountItem type={"oldAccount"} />
            <AccountItem type={"addNewAccount"} />
        </div>
    );
};

export default ListAccount;