import './Home.css';
export function Home() {
    return(
        <div>
            <div className="info-wrapper">
                <div className="info">
                    <div className='brief-introduction-wrapper'>
                        <h2 className='introduction'>
                            Introduction
                        </h2>
                    </div>
                    <div className='profile'>
                        Profile Pic
                    </div>
                </div>
            </div>
        </div>
    );
}