import React from "react";
import UserInfo from "../../models/common/UserInfo";
interface userCardProps {
    userInfo: UserInfo;
}

const UserCard: React.FC<userCardProps> = ({ userInfo }) => {
    return (
        <div>
            <h4>{userInfo.first + " " + userInfo.last}</h4>
        </div>
    );
};
export default UserCard;