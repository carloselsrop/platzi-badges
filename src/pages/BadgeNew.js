import React from 'react';

import header from '../images/badge-header.svg'
import Navbar from '../components/Navbar'
import Badge from '../components/Badge'

class BadgeNew extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="bg-black">
                    <img src={header} alt="Logo" />
                </div>
                <div className="w-full h-full">
                    <div className="flex flex-col pt-2 rounded-xl border">
                        <div>
                            <Badge
                                firstName="Carlos"
                                secondName="Miguel"
                                firstLast="Guzman"
                                isDanger="false"
                                mediaTwitter="@carlos"
                                jobTitle="Frontend Engineer"
                                avatarURL="https://s.gravatar.com/avatar/72be3cd4328114dae55b93ca1574ba22?s=80"
                                footer="#PlatziConf" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeNew;