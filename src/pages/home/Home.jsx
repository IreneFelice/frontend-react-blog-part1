import {Link} from "react-router-dom";
import Pagewrapper from "../../components/pagewrapper/Pagewrapper.jsx";

function Home() {

    // OEFENREQUESTS
    // 1.
    // async function findData() {
    //     try {
    //         const theData = await axios.get('http://localhost:3000/posts');
    //         console.log(theData);
    //     } catch (e) {
    //         console.error(e);
    //     }
    // }
    //
    // 2.
    // async function findPostSix() {
    //     try {
    //         const dataPostSix = await axios('http://localhost:3000/posts/6');
    //         console.log(dataPostSix);
    //     } catch (e) {
    //         console.error(e);
    //     }
    //
    // }
    //
    // 3.
    // async function postData() {
    //     try {
    //         const response = await axios.post('http://localhost:3000/posts',
    //             {
    //                 "title": "Wat gebruiker heeft ingevuld",
    //                 "subtitle": "Wat gebruiker heeft ingevuld",
    //                 "content": "Wat gebruiker heeft ingevuld, in dit geval minder dan 100 woorden",
    //                 "author": "Voornaam achternaam",
    //                 "created": "2023-09-21T09:30:00Z",
    //                 "readTime": 1,
    //                 "comments": 0,
    //                 "shares": 0
    //             });
    //         console.log([response, "JOEPIE!"]);
    //     } catch (e) {
    //         console.error(e);
    //         console.error("OEI");
    //     }
    // }
    //
    // 4. check
    // 5.
    // async function deleteData() {
    //     try {
    //         const response = await axios.delete('http://localhost:3000/posts/21');
    //         console.log("succesvol verwijderd");
    //     } catch (e) {
    //         console.error(e);
    //         console.error("dit is foute boel...");
    //     }
    // }
    //
    // 6.
    // async function updatePost() {
    //     try {
    //         const response = await axios.put('http://localhost:3000/posts/1',
    //             {
    //                 "title": "Lekker eten in Italië",
    //                 "subtitle": "Aangepaste subtitel",
    //                 "content": "Italië, het land van heerlijke pasta, pizza en gelato, is een culinair paradijs dat elke fijnproever moet ervaren. In deze blog nemen we je mee op een smakelijke reis door Bella Italia. Ontdek de geheimen achter de perfecte risotto, leer hoe je zelfgemaakte pasta maakt en proef de verrukkelijke regionale gerechten van Noord tot Zuid. Bereid je voor om je smaakpapillen te verwennen in de keuken van de laarsvormige natie.",
    //                 "author": "Anna de Kok",
    //                 "created": "2023-09-21T09:30:00Z",
    //                 "readTime": 5,
    //                 "comments": 12,
    //                 "shares": 8
    //             });
    //         console.log("goed gedaan");
    //         console.log(response);
    //     } catch (e) {
    //         console.error("manmanmanmanman...");
    //     }
    // }

    return (
        <Pagewrapper>
            <h1>Welkom hier</h1>
            <h2><Link to={`/blog-overview`}>Bekijk alle blogs</Link></h2>
        </Pagewrapper>
    )
}
            {/*<button type="button" onClick={findData}>Log alle blogposts</button>*/}
            {/*<button type="button" onClick={findPostSix}>Log specifieke blogpost</button>*/}
            {/*<button type="button" onClick={postData}>Toevoegen</button>*/}
            {/*<button type="button" onClick={deleteData}>Verwijderen</button>*/}
            {/*<button type="button" onClick={updatePost}>Aanpassen</button>*/}

export default Home;