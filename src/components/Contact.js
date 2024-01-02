const Contact = ()=>{
    return (
        <div className="contact-page font-bold text-3xl m-4 p-4">
            <h1>Send a message to us.</h1>
            <form>
                <input className="border border-black m-2 p-2" placeholder="Name" ></input>
                <input className="border border-black m-2 p-2" placeholder="Message" ></input>
                <button className="bg-black text-white rounded-lg border border-black m-2 p-2" >Submit</button>
 </form>
        </div>
    )
}

export default Contact;