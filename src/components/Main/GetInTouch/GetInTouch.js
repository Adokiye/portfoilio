import React from 'react';
import { ReactComponent as ArrowLeftWithUnderscoreIcon } from '../../../assets/svg/arrow-left-and-underscore.svg';
import { ReactComponent as CaretIcon } from '../../../assets/svg/caret-up.svg';

const GetInTouch = () => {
    return (
        <section class="row contact" id="contact">
            <div class="values__title col-md-5 svg-absolute">
                <h2 class="bebas text-center text-md-left mb-3">
                    <ArrowLeftWithUnderscoreIcon />
                    Have a project?
                </h2>
                <h4 class="landing__hero values__hero project__hero">
                    Lets build something amazing together
                </h4>
            </div>
            <div class="col-md-7">
                <form>
                    <input type="text" name="name" placeholder="Name" />
                    <input type="email" name="email" placeholder="Email" />
                    <textarea name="message" placeholder="Message"></textarea>
                    <div class="row">
                        <div class="offset-lg-6 col-lg-6">
                            <button class="btn btn__primary w-100">
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
