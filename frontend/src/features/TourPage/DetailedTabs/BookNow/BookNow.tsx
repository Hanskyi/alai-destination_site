import React, {ChangeEvent, FormEvent, useState} from 'react';
import style from '../DetailedTabs.module.scss';

interface BookData {
    name: string;
    email: string;
    tourName: string;
    message: string;
}

const BookNow = () => {
    const [data, setData] = useState<BookData>({
        name: '',
        email: '',
        tourName:'',
        message: '',
    });

    const submitFormHandler = async (e: FormEvent) => {
        e.preventDefault();

        try {
            console.log(data);
        } catch (e) {
            alert('Error in Field');
        }
    };

    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setData((prevState) => ({ ...prevState, [name]: value }));
    };
    return (
        <div className={style.bookNow}>
            <div className="container">

                <form onSubmit={submitFormHandler}>
                    <div className={style.form_control}>
                        <label htmlFor="title">Your Name
                            <span className={style.field_require}>*</span>
                        </label>
                        <input
                            required
                            type="text"
                            name="name"
                            value={data.name}
                            onChange={inputChangeHandler}
                            placeholder="Your Name"
                        />
                    </div>

                    <div className={style.form_control}>
                        <label htmlFor="orderNumber">
                            Email address
                            <span className={style.field_require}>*</span>
                        </label>
                        <input
                            required
                            type="email"
                            name="email"
                            value={data.email}
                            onChange={inputChangeHandler}
                            placeholder="Order number"
                        />
                    </div>

                    <div className={style.form_control}>
                        <label htmlFor="duration">
                            Write the name of the tour
                            <span className={style.field_require}>*</span>
                        </label>
                        <input
                            required
                            type="text"
                            name="tourName"
                            value={data.tourName}
                            onChange={inputChangeHandler}
                            placeholder="Tour Name"
                        />
                    </div>

                    <div className={style.form_control}>
                        <label htmlFor="duration">
                            Your Message
                        </label>
                        <input
                            type="text"
                            name="message"
                            value={data.message}
                            onChange={inputChangeHandler}
                            placeholder="Your Message"
                        />
                    </div>


                    <button type="submit">Send</button>
                </form>
            </div>
        </div>

    );
};

export default BookNow;