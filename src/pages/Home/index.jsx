import iconChat from "../../assets/img/icon-chat.png"
import iconMoney from "../../assets/img/icon-money.png"
import iconSecurity from "../../assets/img/icon-security.png"
import Banner from "../../components/Banner"
import FeaturesItem from "../../components/FeaturesItem"

// Ne pas oublier d'optimiser les images !! 

export default function Home () {

    return (
        <div className="body">
            <main>
                <Banner />
                <section className="features">
                    <h2 className="sr-only">Features</h2>
                    <FeaturesItem source={iconChat} title="You are our #1 priority" description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes." />
                    <FeaturesItem source={iconMoney} title="More savings means higher rates" description="The more you save with us, the higher your interest rate will be!" />
                    <FeaturesItem source={iconSecurity} title="Security you can trust" description="We use top of the line encryption to make sure your data and money is always safe." />
                </section>
            </main>
        </div>
    )
}