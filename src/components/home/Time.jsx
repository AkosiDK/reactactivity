//time
const current = new Date();
// By default US English uses 12hr time with AM/PM
const time = current.toLocaleTimeString("en-US");

//date
const date = `${current.getMonth() + 1}/${current.getDate()}/${current.getFullYear()}`;

function Time() {
    return (
        <div className="card">
            <div className="card-body">
                <p className="card-text">{time}</p>
                <p className="card-text">{date}</p>
            </div>
        </div>
    )
}

export default Time;