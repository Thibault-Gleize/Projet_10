import Header from "../../components/Header";
import Form from "../../components/Form";
import Footer from "../../components/Footer";

export default function Login () {

    return (
        <div className="body">
            <Header />
            <main className="main bg-dark">
                <Form />
            </main>
            <Footer />
        </div>
    )
}