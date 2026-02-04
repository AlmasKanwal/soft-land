import React from 'react'

const Faq = () => {
    const faqs = [
        {
            question: "Non consectetur a erat nam at lectus urna duis?",
            answer: "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non."
        },
        {
            question: "Feugiat scelerisque varius morbi enim nunc faucibus?",
            answer: "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui."
        },
        {
            question: "Dolor sit amet consectetur adipiscing elit pellentesque?",
            answer: "Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis"
        },
        {
            question: "Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?",
            answer: "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui."
        },
        {
            question: "Tempus quam pellentesque nec nam aliquam sem et tortor?",
            answer: "Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in"
        },
        {
            question: "Perspiciatis quod quo quos nulla quo illum ullam?",
            answer: "Enim ea facilis quaerat voluptas quidem et dolorem. Quis et consequatur non sed in suscipit sequi. Distinctio ipsam dolore et."
        }
    ]
    return (
        <>
            <div className="faq-section">
                <div className="container-xxl">
                    <div className="headings">
                        <h3>Frequently Asked Questions</h3>
                        <p>
                            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
                        </p>
                    </div>

                    {faqs.map((faq, i) => (
                        <details key={i} className="faq-item">
                            <summary>
                                <span>{faq.question}</span>

                                <span className="icon">
                                    <i className="fa-solid fa-angle-right right"></i>
                                    <i className="fa-solid fa-angle-down down"></i>
                                </span>
                            </summary>

                            <div className="faq-content">{faq.answer}</div>
                        </details>
                    ))}



                </div>
            </div>
        </>
    )
}

export default Faq