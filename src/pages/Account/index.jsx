import Header from "../../components/Header";
import AccountItem from "../../components/AccountItem";
import Footer from "../../components/Footer";


export default function Account () {

    return (
        <div className="body">
            <Header />
            <main className="main bg-dark">
                <div className="header">
                    <h1>
                        Welcome Back 
                        <br />
                        test
                    </h1>
                    <button className="edit-button">Edit Name</button>
                </div>
                <h2 className="sr-only">Accounts</h2>
                <AccountItem title="test" amount="111" description="test" />
                <AccountItem title="test" amount="111" description="test" />
                <AccountItem title="test" amount="111" description="test" />
            </main>
            <Footer />
        </div>
    )
}