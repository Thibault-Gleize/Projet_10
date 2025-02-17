// import Header from "../../components/Header";
import AccountItem from "../../components/AccountItem";
import Footer from "../../components/Footer";
import { useGetUserProfileQuery } from "../../services/requestsAPI"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { profileSlice } from "./profilSlice";
import { useEffect } from "react";

export default function Profil () {

    const token = useSelector((state) => state.auth.token)
    const {data, isLoading, error} = useGetUserProfileQuery(token)
    const profile = useSelector(state => state.profilData.profile)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        isLoading ? null : dispatch(profileSlice.actions.addProfileData(data?.body))
    })

    if (error) {
        navigate("/")
        window.location.reload(true)
    }

    return (
        <div className="body">
            <main className="main bg-dark">
                <div className="header">
                    <h1>
                        Welcome Back 
                        <br />
                        {profile === undefined ? "Loading" : `${profile?.firstName} ${profile?.lastName}`}
                    </h1>
                    <button className="edit-button">Edit Name</button>
                </div>
                <h2 className="sr-only">Accounts</h2>
                <AccountItem title="Argent Bank Checking (x8349)" amount="2,082.79" description="Available Balance"/>
                <AccountItem title="Argent Bank Savings (x6712)" amount="10,928.42" description="Available Balance" />
                <AccountItem title="Argent Bank Credit Card (x8349)" amount="184.30" description="Current Balance" />
            </main>
            <Footer />
        </div>
    )
}