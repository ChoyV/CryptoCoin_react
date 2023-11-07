import styles from "./EigthBlock.module.scss";
import { Disclosure } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";

export default function EigthBlock() {
  const faqs = [
    {
      id: 1,
      question: "How to build a website?",
      answer: `Dolor nonumy tempor elitr et rebum ipsum sit duo duo. Diam sed sed magna et magna diam aliquyam amet dolore ipsum erat duo. Sit rebum magna duo labore no diam.`,
      key: 0,
    },
    {
      id: 1,
      question: "How long will it take to get a new website?",
      answer: `Most customers can expect to receive their food and supplies within 1 to 3 days. Orders that require prescription approval or personalization may take longer to ship.`,
      key: 1,
    },
    {
      id: 1,
      question: "Do you only create HTML websites?",
      answer: `No.`,
      key: 2,
    },
    {
      id: 1,
      question: "Will my website be mobile-friendly?",
      answer: `Orders over $49 ship free! All other orders ship for a flat rate of $4.95.`,
      key: 3,
    },
    {
      id: 1,
      question: "Will you maintain my site for me?",
      answer: `We offer support over email, and the best way to contact us is through the in-app help menu.`,
      key: 4,
    },
    {
      id: 1,
      question: `I'm on a strict budget. Do you have any low-cost options?`,
      answer: `We offer support over email, and the best way to contact us is through the in-app help menu.`,
      key: 5,
    },
    {
      id: 1,
      question: "Will you maintain my site for me?",
      answer: `We offer support over email, and the best way to contact us is through the in-app help menu.`,
      key: 6,
    },
    {
      id: 1,
      question: "Will you maintain my site for me?",
      answer: `We offer support over email, and the best way to contact us is through the in-app help menu.`,
      key: 7,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.textblock}>
        <p className={styles.heading}>FAQs</p>
        <p className={styles.subtext}>Frequently Asked Questions</p>
      </div>
      <div className={styles.main}>
        {faqs.map((faq) => (
          <Disclosure key={faq.key}>
            {({ open }) => (
              <div className={faq.id}>
                <Disclosure.Button
                  className={open ? styles.button1_open : styles.button1_closed}
                >
                  {faq.question}
                  <BsChevronDown
                    className={
                      open ? styles.chevron_open : styles.chevron_closed
                    }
                  />
                </Disclosure.Button>

                <Disclosure.Panel className={styles.discPanel}>
                  {faq.answer}
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
