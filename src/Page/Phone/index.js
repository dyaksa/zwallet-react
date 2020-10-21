import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import "./asset/phone.css";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";
import Footer from "../../Components/Footer";
import ListPhone from "./components/ListPhone";
import AddPhone from "./components/AddPhone";

const defaultData = {
    phone: "",
}

const steps = [
    {id: "manage"},
    {id: "edit"}
]

const Phone = () => {
        const [formData, setForm] = useForm(defaultData);
        const {step, navigation} = useStep({
            steps,
            initialStep: 0
        });

        const props = { formData, setForm, navigation };
        
        const renderSwitch = () => {
            switch(step.id){
                case "manage":
                    return (<ListPhone { ...props }/>);
                case "edit":
                    return (<AddPhone { ...props }/>);
                default:
                    return (<ListPhone { ...props }/>);
            }
        }

        return(
        <>
            <Header/>
                <main className="main__content mt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-3">
                                <Sidebar/>
                            </div>
                            <div className="col-md-12 col-lg-9">
                            <div className="box__shadow">
                                { renderSwitch() }
                            </div>
                            </div>
                        </div>
                    </div>
                </main>
            <Footer/>
        </>
    )
}

export default Phone;