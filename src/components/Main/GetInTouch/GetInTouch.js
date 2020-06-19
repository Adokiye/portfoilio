import React from 'react';
import { ReactComponent as ArrowLeftWithUnderscoreIcon } from '../../../assets/svg/arrow-left-and-underscore.svg';
import { ReactComponent as CaretIcon } from '../../../assets/svg/caret-up.svg';

const GetInTouch = () => {
    return (
        <section className="row contact" id="contact">
            <div className="values__title col-md-5 svg-absolute">
                <h2 className="bebas text-center text-md-left mb-3">
                    <ArrowLeftWithUnderscoreIcon />
                    Have a project?
                </h2>
                <h4 className="landing__hero values__hero project__hero">
                    Lets build something amazing together
                </h4>
            </div>
            <div className="col-md-7">
                <form>
                    <input type="text" name="name" placeholder="Name" />
                    <input type="email" name="email" placeholder="Email" />
                    <textarea name="message" placeholder="Message"></textarea>
                    <div className="row">
                        <div className="offset-lg-6 col-lg-6">
                            <button className="btn btn__primary w-100">
                                Send Message
                                <CaretIcon />
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default GetInTouch;
