import React from 'react';

const AddMyDay = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const {name, email} = user;
    const handleAddDay = () => {
        const newOrder = { name, email };
         fetch('https://radiant-basin-81557.herokuapp.com/addMyDay', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newOrder)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }
    return (
        <div className="container mt-5 border">
            <form action="https://radiant-basin-81557.herokuapp.com/addMyDay" method="post">
                <label for="date">আজকের তারিখ সিলেক্ট কর- </label>
                <input id="date" name="date" placeholder="03 April, 2021" type="date" className="form-control" />
                <br />
                <input id="userName" name="userName" value={name} style={{display: 'none'}}/>
                <input type="email" id="email" name="email" value={email} style={{display: 'none'}}/>
                <label for="namaj">পাঁচ ওয়াক্ত নামাজ কি হয়েছে? না হলে কেন হয় নি?</label>
                <input id="namaj" name="namaj" placeholder="OK/Not OK/why" className="form-control" />
                <br />
                <label>আজ কি কি গুরুত্বপূর্ণ কাজ শেষ করেছি?</label>
                <input id="priorityWork1" name="priorityWork1" placeholder="list-1" className="form-control" />

                <input id="priorityWork2" name="priorityWork2" placeholder="list-2" className="form-control mt-2" />
                <input id="priorityWork3" name="priorityWork3" placeholder="list-3" className="form-control mt-2" />
                <br />
                <label for="workDone">
                    আজকের গুরুত্বপূর্ণ কাজগুলো শেষ না করতে পারলে তার কারণ কি ছিল? </label>
                <input id="workDone" name="workDone" placeholder="Why not finished" className="form-control" />
                <br />
                <label for="valoKaj">একটি ভালো কাজঃ</label>
                <input id="valoKaj" name="valoKaj" placeholder="a good work" className="form-control" />
                <br />
                <label for="ayat">কুরআনের ১ টি আয়াত</label>
                <input id="ayat" name="ayat" placeholder="ayat" className="form-control" />
                <br />
                <label for="hadith">১টি হাদিস</label>
                <input id="hadith" name="hadith" placeholder="hadith" className="form-control" />
                <br />
                <label for="income">আজকের ইনকামঃ </label>
                <input id="income" name="income" placeholder="Today's Income" className="form-control" />
                <br />
                <label for="expenditure">আজকের ব্যয়ঃ </label>
                <input id="expenditure" name="expenditure" placeholder="20 Taka" className="form-control" />
                <br />
                <label for="idea">নতুন কোনো আইডিয়াঃ</label>
                <input id="idea" name="idea" placeholder="idea" className="form-control" />
                <br />
                <label for="gonah">Gonah: </label>
                <input id="gonah" name="gonah" placeholder="gonah" className="form-control" />
                <br />
                <label for="motivation">আজকের মোটিভেশনঃ</label>
                <input id="motivation" name="motivation" placeholder="Motivation" className="form-control" />
                <button type="submit" className="btn btn-primary m-3">Add This Day in You Life</button>
            </form>
        </div>
    );
};

export default AddMyDay;