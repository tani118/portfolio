import Socials from "./Socials";

const MainCard = ({name, desc, resumeLink}) => {
    return <div>
        <h2>{name}</h2>
        {desc.map((line) => {
            return <p>{line}</p>
        })}
        <a href="https://www.google.com">{resumeLink}</a>
        <Socials />
    </div>
}

export default MainCard;