// Activity:
// show a hello message to the user in different colors 
// pass 2 names as props: username and textcolor.

export default function MsgBox({userName, textColor}){
    let styles = {color: textColor};
    return(
        <h1 style={styles}>Hello, {userName}</h1>
    );
}