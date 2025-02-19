// import Header from "../../components/Header";
import AccountItem from "../../components/AccountItem";
import { useGetUserProfileQuery, usePutEditUserMutation } from "../../services/requestsAPI"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { profileSlice } from "./profilSlice";
import { useEffect, useState } from "react";

export default function Profil () {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    // Gestion du hook avec appel API GET, gestion du profile et token avec useSelector pour updater dès que changement.
    const token = useSelector((state) => state.auth.token)
    const {data, isLoading, error, refetch} = useGetUserProfileQuery(token)
    const profile = useSelector(state => state.profilData.profile)

    // Gestion de la partie édition de l'username
    const [editOpen, setEditOpen] = useState(false)
    const [newUser, setNewUser] = useState("")
    const [putEditUser, {isSuccess}] = usePutEditUserMutation()
    async function handleEdit () {
        await putEditUser({ userInput: newUser, token: token});
        if (isSuccess) {
            alert("User name updated");
        } else {
            alert("An issue occured, please try later");
        }
        refetch()
    }

    // Permet le dispatch après le load
    useEffect(() => {
        isLoading ? null : dispatch(profileSlice.actions.addProfileData(data?.body))
    })

    // Renvoie vers la page d'index si pas de token ou si deconnexion
    if (error) {
        navigate("/")
        window.location.reload(true)
    }

    return (
        <div className="body">
            <main className="main bg-dark">
                <div className="header">
                {
                    editOpen ?
                    <>
                        <h1>Edit user info</h1>
                        <form className="edit-form">
                            <label htmlFor="userName">User name: <input type="text" name="userName" id="userName" defaultValue={profile?.userName} className="edit-input" onChange={(e) => setNewUser(() => e.target.value)}/> </label>
                            <label htmlFor="firstName">First name: <input type="text" name="firstName" id="firstName" defaultValue={profile?.firstName} className="edit-input" disabled/> </label>
                            <label htmlFor="lastName">Last name: <input type="text" name="lastName" id="lastName" defaultValue={profile?.lastName} className="edit-input" disabled/> </label>
                        </form>
                        <div className="edit-btns">
                            <button onClick={() => handleEdit()} className="edit-button">Save</button>
                            <button className="edit-button" onClick={() => setEditOpen(false)}>Cancel</button>
                        </div>
                    </>
                    :
                    <>
                        <h1>
                            Welcome Back 
                            <br />
                            {profile === undefined ? "Loading" : `${profile?.firstName} ${profile?.lastName}`}
                        </h1>
                        <button className="edit-button" onClick={(() => setEditOpen(true))}>Edit Name</button>
                    </>
                }
                </div>
                <h2 className="sr-only">Accounts</h2>
                <AccountItem title="Argent Bank Checking (x8349)" amount="2,082.79" description="Available Balance"/>
                <AccountItem title="Argent Bank Savings (x6712)" amount="10,928.42" description="Available Balance" />
                <AccountItem title="Argent Bank Credit Card (x8349)" amount="184.30" description="Current Balance" />
            </main>
        </div>
    )
}