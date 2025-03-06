import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Alert,
  ImageBackground,
  ScrollView,
  SafeAreaView
} from "react-native";

const API_URL = "http://192.168.18.40:3000";
const backgroundImage = require("../assets/back1.png");

const units = {
  unit1: {
    name: "Unit 1: Constitutional Framework",
    subUnits: {
      "sub1": {
        name: "1.1 Making of Constitution",
        questions: [
          {
            question: "What does the Preamble of the Indian Constitution emphasize by beginning with the phrase 'We, the people of India'?",
            options: ["The supremacy of the government", "The sovereignty of Indian citizens", "The power of the judiciary", "The authority of the President"],
            answer: 1
          },
          {
            question: "Which of the following objectives is NOT mentioned in the Preamble?",
            options: ["Justice", "Liberty", "Communalism", "Fraternity"],
            answer: 2
          },
          {
            question: "Which types of justice does the Preamble seek to secure?",
            options: ["Economic", "Social", "Political", "All of the above"],
            answer: 3
          },
          {
            question: "Under 'Liberty,' which of the following freedoms is NOT mentioned in the Preamble?",
            options: ["Freedom of thought", "Freedom of worship", "Freedom to own property", "Freedom of expression"],
            answer: 2
          },
          {
            question: "The Indian Constitution is considered the supreme law of the land. What does this mean?",
            options: ["The judiciary can change it anytime", "All laws and government actions must conform to it", "It is equal to ordinary laws passed by Parliament", "It cannot be amended under any circumstances"],
            answer: 1
          },
          {
            question: "How is the Indian Constitution different from the UK's Constitution?",
            options: ["The Indian Constitution is unwritten", "The Indian Constitution is written and codified", "The Indian Constitution is flexible like the UK's", "The Indian Constitution does not have fundamental rights"],
            answer: 1
          },
          {
            question: "What is the purpose of the Preamble in the Indian Constitution?",
            options: ["It serves as a legal code", "It provides guiding principles and objectives", "It defines state policies", "It replaces fundamental rights"],
            answer: 1
          },
          {
            question: "The Indian Constitution establishes a division of powers between which entities?",
            options: ["The central and local governments", "The judiciary and executive", "The central and state governments", "The legislature and executive"],
            answer: 2
          },
          {
            question: "Which part of the Indian Constitution ensures individual liberties such as freedom of speech and equality?",
            options: ["Directive Principles of State Policy", "Fundamental Rights", "Fundamental Duties", "Union List"],
            answer: 1
          },
          {
            question: "What is the purpose of the Directive Principles of State Policy?",
            options: ["To serve as enforceable laws", "To guide the government in achieving social and economic justice", "To limit the powers of the Parliament", "To regulate international trade"],
            answer: 1
          },
          {
            question: "Which of these is NOT a feature of the Indian Constitution?",
            options: ["Secularism", "Republicanism", "Theocratic State", "Federal Structure"],
            answer: 2
          },
          {
            question: "What does 'Fraternity' in the Preamble mean?",
            options: ["Brotherhood and unity among citizens", "Economic equality", "Power of the judiciary", "Strict law enforcement"],
            answer: 0
          },
          {
            question: "What does the term 'Republic' in the Indian Constitution signify?",
            options: ["The head of state is elected", "The President is supreme", "The Prime Minister is the head of state", "India is a monarchy"],
            answer: 0
          },
          {
            question: "Why are the Directive Principles of State Policy not enforceable by courts?",
            options: ["They are part of the fundamental rights", "They are mere suggestions", "They serve as moral and policy guidelines for governance", "They apply only to the judiciary"],
            answer: 2
          },
          {
            question: "What ensures the secular nature of the Indian Constitution?",
            options: ["It allows government to promote one religion", "It gives special status to Hinduism", "It mandates equal treatment of all religions", "It discourages religious freedom"],
            answer: 2
          },
          {
            question: "Which of the following is NOT a Fundamental Right under the Indian Constitution?",
            options: ["Right to Equality", "Right to Constitutional Remedies", "Right to Property", "Right to Freedom"],
            answer: 2
          },
          {
            question: "What is the significance of the amendment procedure in the Indian Constitution?",
            options: ["It allows flexibility and adaptation to changing needs", "It makes the Constitution rigid and unchangeable", "It grants the judiciary the power to modify the Constitution", "It weakens parliamentary authority"],
            answer: 0
          },
          {
            question: "What does the term 'Sovereign' in the Preamble signify?",
            options: ["India is dependent on foreign nations", "India follows the British Constitution", "India is free to make its own decisions without external influence", "India is ruled by the President"],
            answer: 2
          },
          {
            question: "What is the main purpose of Fundamental Rights in the Indian Constitution?",
            options: ["To grant absolute power to the government", "To protect citizens from government abuse", "To increase state authority", "To limit democracy"],
            answer: 1
          },
          {
            question: "Which part of the Constitution of India cannot be amended easily?",
            options: ["Fundamental Duties", "Directive Principles of State Policy", "Basic Structure", "The Preamble only"],
            answer: 2
          }
        ]
      },
      "sub2": {
        name: "1.2 Fundamental Rights",
        questions: [
          {
            question: "In which landmark case was the Doctrine of Basic Structure first established?",
            options: [
              "Golaknath v. State of Punjab",
              "Minerva Mills v. Union of India",
              "Kesavananda Bharati v. State of Kerala",
              "Maneka Gandhi v. Union of India"
            ],
            answer: 2
          },
          {
            question: "Under which article does the Indian Parliament have the power to amend the Constitution?",
            options: [
              "Article 32",
              "Article 226",
              "Article 368",
              "Article 356"
            ],
            answer: 2
          },
          {
            question: "What is the primary objective of the Doctrine of Basic Structure?",
            options: [
              "To allow Parliament to make unlimited amendments",
              "To protect the fundamental principles of the Constitution from arbitrary amendments",
              "To give the President more powers",
              "To restrict the powers of the Supreme Court"
            ],
            answer: 1
          },
          {
            question: "Which of the following is NOT considered a part of the basic structure of the Constitution?",
            options: [
              "Supremacy of the Constitution",
              "Fundamental Rights",
              "Separation of Powers",
              "Reservation Policy"
            ],
            answer: 3
          },
          {
            question: "Who has the ultimate authority to determine whether an amendment violates the basic structure?",
            options: [
              "President of India",
              "Parliament",
              "Supreme Court of India",
              "Prime Minister"
            ],
            answer: 2
          },
          {
            question: "Which of the following is NOT a feature of the Doctrine of Basic Structure?",
            options: [
              "It ensures that fundamental principles remain intact",
              "It prevents Parliament from changing any part of the Constitution",
              "It allows judicial review of constitutional amendments",
              "It maintains a balance between flexibility and stability in the Constitution"
            ],
            answer: 1
          },
          {
            question: "The demand for a written Constitution in India can be traced back to which period?",
            options: [
              "18th century",
              "Early 19th century",
              "Late 19th and early 20th century",
              "After World War II"
            ],
            answer: 2
          },
          {
            question: "The Government of India Act of 1935 is significant because:",
            options: [
              "It introduced the concept of parliamentary democracy in India",
              "It laid the foundation for the Constitution of India",
              "It granted complete independence to India",
              "It abolished British rule in India"
            ],
            answer: 1
          },
          {
            question: "Who was the Chairman of the Drafting Committee of the Indian Constitution?",
            options: [
              "Jawaharlal Nehru",
              "Sardar Patel",
              "Dr. B.R. Ambedkar",
              "Mahatma Gandhi"
            ],
            answer: 2
          },
          {
            question: "Which foreign constitutions influenced the Indian Constitution?",
            options: [
              "United States, United Kingdom, Canada, and Ireland",
              "China, Russia, Japan, and France",
              "Germany, Brazil, South Africa, and Italy",
              "Afghanistan, Sri Lanka, Nepal, and Pakistan"
            ],
            answer: 0
          },
          {
            question: "When was the Constitution of India adopted?",
            options: [
              "January 26, 1947",
              "August 15, 1947",
              "November 26, 1949",
              "January 26, 1950"
            ],
            answer: 3
          },
          {
            question: "Which of the following principles is NOT explicitly mentioned in the Preamble of the Indian Constitution?",
            options: [
              "Socialism",
              "Secularism",
              "Communism",
              "Democracy"
            ],
            answer: 2
          },
          {
            question: "The Doctrine of Basic Structure helps maintain a balance between:",
            options: [
              "State and central government",
              "Flexibility and stability of the Constitution",
              "Executive and judiciary",
              "Fundamental Rights and Directive Principles"
            ],
            answer: 1
          },
          {
            question: "The Kesavananda Bharati case was mainly concerned with:",
            options: [
              "The abolition of Fundamental Rights",
              "The authority of the judiciary to review constitutional amendments",
              "The creation of new states",
              "The implementation of Directive Principles"
            ],
            answer: 1
          },
          {
            question: "The historical development of the Indian Constitution reflects:",
            options: [
              "A journey of continuous dictatorship",
              "The commitment to monarchy and aristocracy",
              "Democratic consolidation and the protection of fundamental principles",
              "The rejection of all foreign influences"
            ],
            answer: 2
          }
        ]
      },
      "sub3": {
        name: "1.3 Directive Principles",
        questions: [
          {
            question: "How many articles are there in the Constitution of India?",
            options: [
              "395",
              "448",
              "370",
              "500"
            ],
            answer: 1
          },
          {
            question: "The Constitution of India provides for a federal system with a __________ bias.",
            options: [
              "Democratic",
              "Socialistic",
              "Unitary",
              "Regional"
            ],
            answer: 2
          },
          {
            question: "Which form of government does India follow?",
            options: [
              "Presidential Democracy",
              "Parliamentary Democracy",
              "Monarchy",
              "Military Rule"
            ],
            answer: 1
          },
          {
            question: "Which of the following is NOT a fundamental right under the Indian Constitution?",
            options: [
              "Right to Equality",
              "Right to Property",
              "Right to Freedom",
              "Right to Constitutional Remedies"
            ],
            answer: 1
          },
          {
            question: "The Directive Principles of State Policy (DPSP) aim to achieve __________.",
            options: [
              "Social and Economic Justice",
              "Political Domination",
              "Military Control",
              "Unitary Government"
            ],
            answer: 0
          },
          {
            question: "What is the role of the Indian judiciary in the context of the Constitution?",
            options: [
              "To create new laws",
              "To implement government policies",
              "To act as the guardian of the Constitution",
              "To control the executive branch"
            ],
            answer: 2
          },
          {
            question: "What does the Indian Constitution declare India to be in terms of religion?",
            options: [
              "Hindu State",
              "Islamic State",
              "Secular State",
              "Christian State"
            ],
            answer: 2
          },
          {
            question: "How can the Indian Constitution be amended?",
            options: [
              "By the Prime Minister's approval",
              "Through judicial review",
              "By a simple majority in Parliament",
              "Through a special procedure requiring different levels of approval"
            ],
            answer: 3
          },
          {
            question: "What type of citizenship does India follow?",
            options: [
              "Dual Citizenship",
              "State-wise Citizenship",
              "Single Citizenship",
              "Regional Citizenship"
            ],
            answer: 2
          },
          {
            question: "Who holds the real executive powers in India?",
            options: [
              "President",
              "Prime Minister",
              "Governor",
              "Chief Justice of India"
            ],
            answer: 1
          }
        ]
      },
      "sub4": {
        name: "1.4 Fundamental Duties",
        questions: [
          {
            question: "What type of Constitution does India have?",
            options: [
              "Unwritten",
              "Flexible",
              "Written",
              "Rigid"
            ],
            answer: 2
          },
          {
            question: "Which country has the longest written Constitution in the world?",
            options: [
              "USA",
              "India",
              "UK",
              "China"
            ],
            answer: 1
          },
          {
            question: "How many articles were originally present in the Indian Constitution?",
            options: [
              "370",
              "448",
              "395",
              "500"
            ],
            answer: 2
          },
          {
            question: "Which of the following is NOT mentioned in the Preamble of the Indian Constitution?",
            options: [
              "Sovereign",
              "Socialist",
              "Communist",
              "Secular"
            ],
            answer: 2
          },
          {
            question: "The Indian Constitution provides for a ______ system with a unitary bias.",
            options: [
              "Federal",
              "Presidential",
              "Confederal",
              "Autocratic"
            ],
            answer: 0
          },
          {
            question: "Who is the nominal head of India as per the Constitution?",
            options: [
              "Prime Minister",
              "Chief Justice of India",
              "President",
              "Governor"
            ],
            answer: 2
          },
          {
            question: "Fundamental Rights are guaranteed under which part of the Indian Constitution?",
            options: [
              "Part II",
              "Part III",
              "Part IV",
              "Part V"
            ],
            answer: 1
          },
          {
            question: "Directive Principles of State Policy are inspired by the Constitution of which country?",
            options: [
              "USA",
              "UK",
              "Ireland",
              "France"
            ],
            answer: 2
          },
          {
            question: "Which amendment added the Fundamental Duties to the Indian Constitution?",
            options: [
              "42nd Amendment",
              "44th Amendment",
              "52nd Amendment",
              "62nd Amendment"
            ],
            answer: 0
          },
          {
            question: "The Supreme Court of India has the power of ______ to ensure laws do not violate the Constitution.",
            options: [
              "Judicial Review",
              "Judicial Supremacy",
              "Judicial Execution",
              "Judicial Rule"
            ],
            answer: 0
          },
          {
            question: "What type of citizenship does India follow?",
            options: [
              "Dual Citizenship",
              "State-wise Citizenship",
              "Single Citizenship",
              "Regional Citizenship"
            ],
            answer: 2
          },
          {
            question: "Which article deals with Universal Adult Suffrage in India?",
            options: [
              "Article 14",
              "Article 21",
              "Article 326",
              "Article 370"
            ],
            answer: 2
          },
          {
            question: "The Indian Parliament consists of how many houses?",
            options: [
              "One",
              "Two",
              "Three",
              "Four"
            ],
            answer: 1
          },
          {
            question: "What is the lower house of the Indian Parliament called?",
            options: [
              "Rajya Sabha",
              "Lok Sabha",
              "Vidhan Sabha",
              "Gram Sabha"
            ],
            answer: 1
          },
          {
            question: "Under which article can the President declare a National Emergency?",
            options: [
              "Article 352",
              "Article 356",
              "Article 360",
              "Article 368"
            ],
            answer: 0
          },
          {
            question: "What is the purpose of Article 356?",
            options: [
              "National Emergency",
              "State Emergency",
              "Financial Emergency",
              "Fundamental Rights Protection"
            ],
            answer: 1
          },
          {
            question: "Which article allows for Financial Emergency?",
            options: [
              "Article 352",
              "Article 356",
              "Article 360",
              "Article 368"
            ],
            answer: 2
          },
          {
            question: "What is the procedure to amend the Indian Constitution?",
            options: [
              "President's Approval",
              "Judicial Decision",
              "Article 368",
              "Prime Minister's Directive"
            ],
            answer: 2
          },
          {
            question: "Which former article granted special status to Jammu and Kashmir?",
            options: [
              "Article 360",
              "Article 370",
              "Article 371",
              "Article 377"
            ],
            answer: 1
          },
          {
            question: "Which language is recognized as the official language of India?",
            options: [
              "Sanskrit",
              "Hindi",
              "Tamil",
              "Bengali"
            ],
            answer: 1
          }
        ]
      }
    }
  },
  unit2: {
    name: "Unit 2: Union Government",
    subUnits: {
      "sub1": {
        name: "2.1 Union Executive",
        questions: [
          {
            question: "Which article of the Indian Constitution guarantees 'Equality before law'?",
            options: [
              "Article 15",
              "Article 14",
              "Article 16",
              "Article 18"
            ],
            answer: 1
          },
          {
            question: "Which fundamental right prohibits discrimination on grounds of religion, race, caste, sex, or place of birth?",
            options: [
              "Right to Freedom",
              "Right against Exploitation",
              "Right to Equality",
              "Right to Constitutional Remedies"
            ],
            answer: 2
          },
          {
            question: "Abolition of untouchability is mentioned under which article?",
            options: [
              "Article 17",
              "Article 18",
              "Article 14",
              "Article 16"
            ],
            answer: 0
          },
          {
            question: "Which fundamental right includes 'Freedom of speech and expression'?",
            options: [
              "Right to Equality",
              "Right to Freedom",
              "Right against Exploitation",
              "Right to Constitutional Remedies"
            ],
            answer: 1
          },
          {
            question: "Under which article is the 'Protection of life and personal liberty' guaranteed?",
            options: [
              "Article 20",
              "Article 21",
              "Article 22",
              "Article 19"
            ],
            answer: 1
          },
          {
            question: "'Right to move freely throughout the territory of India' is guaranteed under which article?",
            options: [
              "Article 19(1)(d)",
              "Article 19(1)(a)",
              "Article 21",
              "Article 32"
            ],
            answer: 0
          },
          {
            question: "Which fundamental right prohibits forced labor and human trafficking?",
            options: [
              "Right to Equality",
              "Right to Freedom",
              "Right against Exploitation",
              "Right to Constitutional Remedies"
            ],
            answer: 2
          },
          {
            question: "Which article prohibits employment of children in hazardous industries?",
            options: [
              "Article 23",
              "Article 24",
              "Article 21",
              "Article 15"
            ],
            answer: 1
          },
          {
            question: "'Freedom to manage religious affairs' is mentioned in which article?",
            options: [
              "Article 25",
              "Article 26",
              "Article 27",
              "Article 28"
            ],
            answer: 1
          },
          {
            question: "The right to establish and administer educational institutions is given to minorities under which article?",
            options: [
              "Article 29",
              "Article 30",
              "Article 25",
              "Article 19"
            ],
            answer: 1
          },
          {
            question: "Which article allows citizens to practice any profession or carry on any occupation, trade, or business?",
            options: [
              "Article 14",
              "Article 19(1)(g)",
              "Article 21",
              "Article 25"
            ],
            answer: 1
          },
          {
            question: "Which fundamental right allows citizens to form associations or unions?",
            options: [
              "Article 19(1)(c)",
              "Article 21",
              "Article 29",
              "Article 32"
            ],
            answer: 0
          },
          {
            question: "'Freedom from payment of taxes for promotion of any particular religion' is provided under which article?",
            options: [
              "Article 25",
              "Article 26",
              "Article 27",
              "Article 28"
            ],
            answer: 2
          },
          {
            question: "Under which fundamental right is 'Abolition of titles' mentioned?",
            options: [
              "Right to Freedom",
              "Right to Equality",
              "Right against Exploitation",
              "Cultural and Educational Rights"
            ],
            answer: 1
          },
          {
            question: "Which article guarantees protection against conviction for offenses?",
            options: [
              "Article 19",
              "Article 20",
              "Article 21",
              "Article 32"
            ],
            answer: 1
          },
          {
            question: "The right to move the Supreme Court for enforcement of Fundamental Rights is granted under which article?",
            options: [
              "Article 32",
              "Article 21",
              "Article 19",
              "Article 16"
            ],
            answer: 0
          },
          {
            question: "Which fundamental right guarantees 'Freedom of conscience and free profession, practice, and propagation of religion'?",
            options: [
              "Article 19",
              "Article 21",
              "Article 25",
              "Article 14"
            ],
            answer: 2
          },
          {
            question: "'Right to reside and settle in any part of the territory of India' is mentioned under which article?",
            options: [
              "Article 16",
              "Article 19(1)(e)",
              "Article 14",
              "Article 20"
            ],
            answer: 1
          },
          {
            question: "Which fundamental right protects minorities' interests in India?",
            options: [
              "Right to Equality",
              "Right to Freedom",
              "Cultural and Educational Rights",
              "Right against Exploitation"
            ],
            answer: 2
          },
          {
            question: "Which article provides protection against arbitrary arrest and detention?",
            options: [
              "Article 14",
              "Article 22",
              "Article 24",
              "Article 18"
            ],
            answer: 1
          }
        ]
      },
      "sub2": {
        name: "2.2 Union Legislature",
        questions: [
          {
            question: "Which part of the Indian Constitution contains Fundamental Duties?",
            options: [
              "Part II",
              "Part III",
              "Part IV-A",
              "Part V"
            ],
            answer: 2
          },
          {
            question: "Which amendment introduced the Fundamental Duties in the Indian Constitution?",
            options: [
              "42nd Amendment, 1976",
              "44th Amendment, 1978",
              "73rd Amendment, 1992",
              "86th Amendment, 2002"
            ],
            answer: 0
          },
          {
            question: "Which of the following is NOT a Fundamental Duty?",
            options: [
              "To protect the sovereignty, unity, and integrity of India",
              "To follow any religion of choice",
              "To safeguard public property",
              "To strive towards excellence in all spheres"
            ],
            answer: 1
          },
          {
            question: "Which duty emphasizes environmental protection?",
            options: [
              "To cherish the ideals of the freedom struggle",
              "To renounce practices derogatory to women",
              "To protect and improve the natural environment",
              "To safeguard public property"
            ],
            answer: 2
          },
          {
            question: "What does the Fundamental Duty regarding scientific temper promote?",
            options: [
              "Superstitions and traditions",
              "Rational thinking and innovation",
              "Only religious knowledge",
              "Blind faith in old customs"
            ],
            answer: 1
          },
          {
            question: "Which of the following is a responsibility of every citizen according to Fundamental Duties?",
            options: [
              "Renouncing fundamental rights",
              "Defending the country when called upon",
              "Not following government orders",
              "Avoiding taxation"
            ],
            answer: 1
          },
          {
            question: "Which duty focuses on preserving India's cultural heritage?",
            options: [
              "To safeguard public property",
              "To promote harmony among citizens",
              "To value and preserve the rich heritage of our composite culture",
              "To develop scientific temper"
            ],
            answer: 2
          },
          {
            question: "Which Fundamental Duty is directly linked to women's empowerment?",
            options: [
              "To promote brotherhood among all citizens",
              "To renounce practices derogatory to the dignity of women",
              "To protect sovereignty and integrity of India",
              "To strive for excellence in all spheres"
            ],
            answer: 1
          },
          {
            question: "What age group does the Fundamental Duty of education apply to?",
            options: [
              "3-10 years",
              "5-15 years",
              "6-14 years",
              "10-18 years"
            ],
            answer: 2
          },
          {
            question: "What is the purpose of Fundamental Duties in the Constitution?",
            options: [
              "To grant new rights to citizens",
              "To establish moral and civic responsibilities",
              "To limit the power of the judiciary",
              "To remove fundamental rights"
            ],
            answer: 1
          },
          {
            question: "Which Fundamental Duty is most relevant to engineers regarding infrastructure safety?",
            options: [
              "Striving for excellence",
              "Safeguarding public property",
              "Promoting harmony",
              "Defending the country"
            ],
            answer: 1
          },
          {
            question: "What should engineers focus on to promote sustainability?",
            options: [
              "Protecting and improving the natural environment",
              "Increasing industrial pollution",
              "Disregarding public safety",
              "Avoiding new technologies"
            ],
            answer: 0
          },
          {
            question: "How can engineers contribute to national excellence?",
            options: [
              "By striving for excellence in all professional activities",
              "By following outdated technologies",
              "By avoiding research and innovation",
              "By ignoring technical advancements"
            ],
            answer: 0
          },
          {
            question: "Which Fundamental Duty aligns with an engineer's role in technological development?",
            options: [
              "To uphold sovereignty and integrity of India",
              "To develop scientific temper and the spirit of inquiry",
              "To renounce practices derogatory to women",
              "To provide opportunities for education"
            ],
            answer: 1
          },
          {
            question: "Why should engineers safeguard public property?",
            options: [
              "Because it ensures the durability of infrastructure",
              "Because private property is unimportant",
              "Because it helps engineers earn more money",
              "Because public property belongs only to the government"
            ],
            answer: 0
          },
          {
            question: "How can engineers help in education, as per Fundamental Duties?",
            options: [
              "By avoiding knowledge-sharing",
              "By mentoring students and promoting STEM education",
              "By focusing only on private businesses",
              "By not engaging in research and development"
            ],
            answer: 1
          },
          {
            question: "Which Fundamental Duty aligns with an engineer's role in social development?",
            options: [
              "To defend the country when called upon",
              "To promote harmony and brotherhood among all people",
              "To avoid government responsibilities",
              "To protect only personal interests"
            ],
            answer: 1
          },
          {
            question: "Why is environmental responsibility important for engineers?",
            options: [
              "Because projects impact the environment",
              "Because pollution does not affect engineers",
              "Because only environmentalists should care",
              "Because engineering and environment are unrelated"
            ],
            answer: 0
          },
          {
            question: "How can engineers support women's dignity in their profession?",
            options: [
              "By promoting gender inclusivity and fair workplace policies",
              "By limiting women's participation in engineering",
              "By discouraging female engineers",
              "By ignoring workplace ethics"
            ],
            answer: 0
          },
          {
            question: "Which Fundamental Duty supports technological innovation in engineering?",
            options: [
              "To promote scientific temper and inquiry",
              "To safeguard public property",
              "To renounce violence",
              "To follow traditional methods only"
            ],
            answer: 0
          }
        ]
      },
      "sub3": {
        name: "2.3 Union Judiciary",
        questions: [
          {
            question: "Which part of the Indian Constitution contains the Directive Principles of State Policy (DPSP)?",
            options: [
              "Part III",
              "Part IV",
              "Part V",
              "Part IV-A"
            ],
            answer: 1
          },
          {
            question: "Which part of the Indian Constitution contains Fundamental Duties?",
            options: [
              "Part IV",
              "Part III",
              "Part IV-A",
              "Part II"
            ],
            answer: 2
          },
          {
            question: "Which constitutional amendment introduced the Fundamental Duties?",
            options: [
              "42nd Amendment",
              "44th Amendment",
              "73rd Amendment",
              "86th Amendment"
            ],
            answer: 0
          },
          {
            question: "What is the primary difference between Fundamental Rights and Directive Principles?",
            options: [
              "Fundamental Rights are justiciable, while DPSP are non-justiciable",
              "DPSP are justiciable, while Fundamental Rights are non-justiciable",
              "Both are legally enforceable",
              "Neither is legally enforceable"
            ],
            answer: 0
          },
          {
            question: "Which of the following DPSPs deals with the protection of the environment?",
            options: [
              "Article 39A",
              "Article 40",
              "Article 48A",
              "Article 44"
            ],
            answer: 2
          },
          {
            question: "Which Fundamental Right may be restricted to implement reservation policies?",
            options: [
              "Right to Equality (Article 14)",
              "Right to Freedom of Religion (Article 25)",
              "Right to Freedom of Speech (Article 19)",
              "Right to Property (Article 300A)"
            ],
            answer: 0
          },
          {
            question: "Under which article is free and compulsory education for children between 6-14 years provided?",
            options: [
              "Article 21",
              "Article 21A",
              "Article 39",
              "Article 44"
            ],
            answer: 1
          },
          {
            question: "Which DPSP promotes equal pay for equal work?",
            options: [
              "Article 39(b)",
              "Article 39(c)",
              "Article 43",
              "Article 41"
            ],
            answer: 1
          },
          {
            question: "Which Fundamental Duty emphasizes the need to develop a scientific temper and humanism?",
            options: [
              "To safeguard public property",
              "To promote harmony",
              "To develop scientific temper, humanism, and the spirit of inquiry",
              "To respect the national flag"
            ],
            answer: 2
          },
          {
            question: "Which directive principle relates to international peace and security?",
            options: [
              "Article 48",
              "Article 51",
              "Article 40",
              "Article 43"
            ],
            answer: 1
          },
          {
            question: "Which Fundamental Duty focuses on protecting and improving the natural environment?",
            options: [
              "To uphold and protect the sovereignty of India",
              "To promote harmony and brotherhood",
              "To safeguard public property",
              "To protect and improve the environment"
            ],
            answer: 3
          },
          {
            question: "Which Fundamental Right is most affected by laws promoting social welfare?",
            options: [
              "Right to Equality",
              "Right to Freedom of Speech",
              "Right to Constitutional Remedies",
              "Right to Privacy"
            ],
            answer: 0
          },
          {
            question: "What is the purpose of Directive Principles in the Indian Constitution?",
            options: [
              "To serve as legally binding laws",
              "To guide the government in policy-making",
              "To limit the power of Parliament",
              "To grant special privileges to citizens"
            ],
            answer: 1
          },
          {
            question: "Which article directs the state to promote the welfare of people by securing a social order based on justice?",
            options: [
              "Article 37",
              "Article 38",
              "Article 40",
              "Article 48"
            ],
            answer: 1
          },
          {
            question: "Which DPSP directs the state to organize village panchayats?",
            options: [
              "Article 39",
              "Article 40",
              "Article 41",
              "Article 42"
            ],
            answer: 1
          },
          {
            question: "Which of the following is NOT a Fundamental Duty?",
            options: [
              "To abide by the Constitution",
              "To uphold sovereignty and unity",
              "To pay taxes honestly",
              "To safeguard public property"
            ],
            answer: 2
          },
          {
            question: "Which directive principle promotes cottage industries in rural areas?",
            options: [
              "Article 41",
              "Article 42",
              "Article 43",
              "Article 44"
            ],
            answer: 2
          },
          {
            question: "Which case led to the Supreme Court holding that DPSP can prevail over Fundamental Rights?",
            options: [
              "Kesavananda Bharati Case",
              "Golaknath Case",
              "Minerva Mills Case",
              "Maneka Gandhi Case"
            ],
            answer: 0
          },
          {
            question: "Which DPSP focuses on securing a uniform civil code for citizens?",
            options: [
              "Article 39",
              "Article 42",
              "Article 44",
              "Article 46"
            ],
            answer: 2
          },
          {
            question: "The 42nd Amendment Act added which new directive principle?",
            options: [
              "Equal pay for equal work",
              "Protection of the environment",
              "Promotion of cottage industries",
              "Separation of judiciary from the executive"
            ],
            answer: 1
          }
        ]
      },
      
    }
  },
  unit3: {
    name: "Unit 3: State Government",
    subUnits: {
      "sub1": {
        name: "3.1 State Executive",
        questions: [
          {
            question: "Which constitutional amendment introduced the First Amendment Act, 1951?",
            options: [
              "Protection of Fundamental Rights",
              "Protection of Land Reforms",
              "Protection of Directive Principles",
              "Protection of Freedom of Religion"
            ],
            answer: 1
          },
          {
            question: "The Seventh Amendment Act, 1956, was related to:",
            options: [
              "Fundamental Duties",
              "Reservation Policies",
              "Reorganization of States on a linguistic basis",
              "Introduction of GST"
            ],
            answer: 2
          },
          {
            question: "Which constitutional amendment lowered the voting age from 21 to 18 years?",
            options: [
              "52nd Amendment",
              "61st Amendment",
              "91st Amendment",
              "101st Amendment"
            ],
            answer: 1
          },
          {
            question: "The 42nd Amendment Act, 1976, is also known as:",
            options: [
              "The Mini Constitution",
              "The Economic Amendment",
              "The Judicial Review Amendment",
              "The Taxation Amendment"
            ],
            answer: 0
          },
          {
            question: "Which amendment introduced the Goods and Services Tax (GST)?",
            options: [
              "52nd Amendment",
              "61st Amendment",
              "101st Amendment",
              "44th Amendment"
            ],
            answer: 2
          },
          {
            question: "Which amendment extended the reservation of seats for Scheduled Castes and Scheduled Tribes?",
            options: [
              "12th Amendment",
              "25th Amendment",
              "52nd Amendment",
              "10th Amendment"
            ],
            answer: 3
          },
          {
            question: "Which amendment added Fundamental Duties to the Constitution?",
            options: [
              "44th Amendment",
              "52nd Amendment",
              "42nd Amendment",
              "93rd Amendment"
            ],
            answer: 2
          },
          {
            question: "Which constitutional amendment inserted provisions for reservation in educational institutions?",
            options: [
              "61st Amendment",
              "91st Amendment",
              "93rd Amendment",
              "101st Amendment"
            ],
            answer: 2
          },
          {
            question: "Which article outlines the procedure for amending the Constitution?",
            options: [
              "Article 356",
              "Article 370",
              "Article 368",
              "Article 395"
            ],
            answer: 2
          },
          {
            question: "What is required to pass an amendment under the special procedure?",
            options: [
              "Majority in Lok Sabha only",
              "Majority in Rajya Sabha only",
              "Two-thirds majority in both Houses of Parliament and ratification by at least half of the states",
              "Presidential Ordinance"
            ],
            answer: 2
          },
          {
            question: "Which amendment removed the requirement of the President's recommendation for the introduction of certain bills in state legislatures?",
            options: [
              "12th Amendment",
              "14th Amendment",
              "25th Amendment",
              "44th Amendment"
            ],
            answer: 1
          },
          {
            question: "Which amendment limited the scope of judicial review in elections of the President and Vice-President?",
            options: [
              "25th Amendment",
              "43rd Amendment",
              "44th Amendment",
              "52nd Amendment"
            ],
            answer: 3
          },
          {
            question: "Which amendment created the National Commission for Scheduled Castes and Scheduled Tribes?",
            options: [
              "91st Amendment",
              "93rd Amendment",
              "101st Amendment",
              "42nd Amendment"
            ],
            answer: 0
          },
          {
            question: "What is the first step in the constitutional amendment process?",
            options: [
              "Approval by the Supreme Court",
              "Ratification by state legislatures",
              "Introduction of the amendment bill in Parliament",
              "Consent of the President"
            ],
            answer: 2
          },
          {
            question: "Which amendment limited the right to property as a Fundamental Right?",
            options: [
              "10th Amendment",
              "12th Amendment",
              "14th Amendment",
              "44th Amendment"
            ],
            answer: 1
          }
        ]
      },
      "sub2": {
        name: "3.2 State Legislature",
        questions: [
          {
            question: "Which constitutional lists define the legislative relations between the Centre and States?",
            options: [
              "Fundamental List, Executive List, Judiciary List",
              "Union List, State List, Concurrent List",
              "Federal List, Regional List, Administrative List",
              "Governance List, Law List, State List"
            ],
            answer: 1
          },
          {
            question: "In case of a conflict between the Centre and State laws on a subject in the Concurrent List, which law prevails?",
            options: [
              "State Law",
              "Centre Law",
              "Supreme Court's Decision",
              "Governor's Decision"
            ],
            answer: 1
          },
          {
            question: "Who recommends the distribution of financial resources between the Centre and the States?",
            options: [
              "Election Commission",
              "Planning Commission",
              "Finance Commission",
              "Reserve Bank of India"
            ],
            answer: 2
          },
          {
            question: "Which type of emergency allows the Centre to take over the powers of a State government?",
            options: [
              "National Emergency",
              "Financial Emergency",
              "State Emergency (President's Rule)",
              "Natural Disaster Emergency"
            ],
            answer: 2
          },
          {
            question: "What is the role of the Governor in a State?",
            options: [
              "Head of the Judiciary",
              "Constitutional head and representative of the President",
              "Head of the Legislature",
              "Chief Financial Officer of the State"
            ],
            answer: 1
          },
          {
            question: "Which constitutional body helps resolve inter-state disputes?",
            options: [
              "Inter-State Council",
              "State Legislature",
              "Election Commission",
              "National Human Rights Commission"
            ],
            answer: 0
          },
          {
            question: "Which constitutional provision governs the amendment of Centre-State relations?",
            options: [
              "Article 368",
              "Article 21",
              "Article 370",
              "Article 52"
            ],
            answer: 0
          },
          {
            question: "Which organ of the government resolves Centre-State disputes?",
            options: [
              "President of India",
              "Supreme Court",
              "Prime Minister",
              "Speaker of Lok Sabha"
            ],
            answer: 1
          },
          {
            question: "What is the primary objective of the Finance Commission?",
            options: [
              "Conducting elections in states",
              "Allocation of financial resources between Centre and States",
              "Appointing Governors",
              "Resolving international trade disputes"
            ],
            answer: 1
          },
          {
            question: "Which of the following is NOT a type of emergency in the Indian Constitution?",
            options: [
              "National Emergency",
              "State Emergency",
              "Political Emergency",
              "Financial Emergency"
            ],
            answer: 2
          }
        ]
      },
      "sub3": {
        name: "3.3 State Judiciary",
        questions: [
          {
            question: "What was the main purpose of the First Amendment Act, 1951?",
            options: [
              "Introduction of GST",
              "Reorganization of States",
              "Protection of land reform laws",
              "Reservation for SCs and STs in promotions"
            ],
            answer: 2
          },
          {
            question: "Which amendment reorganized Indian states on a linguistic basis?",
            options: [
              "1st Amendment",
              "7th Amendment",
              "42nd Amendment",
              "101st Amendment"
            ],
            answer: 1
          },
          {
            question: "Which amendment introduced the Fundamental Duties in the Constitution?",
            options: [
              "44th Amendment",
              "42nd Amendment",
              "73rd Amendment",
              "52nd Amendment"
            ],
            answer: 1
          },
          {
            question: "Which amendment reversed the Emergency-era changes made by the 42nd Amendment?",
            options: [
              "44th Amendment",
              "73rd Amendment",
              "101st Amendment",
              "76th Amendment"
            ],
            answer: 0
          },
          {
            question: "Which amendment established the Panchayati Raj system?",
            options: [
              "42nd Amendment",
              "74th Amendment",
              "73rd Amendment",
              "86th Amendment"
            ],
            answer: 2
          },
          {
            question: "Which amendment granted constitutional status to municipalities in urban areas?",
            options: [
              "74th Amendment",
              "52nd Amendment",
              "91st Amendment",
              "76th Amendment"
            ],
            answer: 0
          },
          {
            question: "Which amendment made education a fundamental right for children aged 6 to 14 years?",
            options: [
              "42nd Amendment",
              "44th Amendment",
              "86th Amendment",
              "102nd Amendment"
            ],
            answer: 2
          },
          {
            question: "Which amendment introduced the Goods and Services Tax (GST)?",
            options: [
              "52nd Amendment",
              "91st Amendment",
              "101st Amendment",
              "73rd Amendment"
            ],
            answer: 2
          },
          {
            question: "The 52nd Amendment Act, 1985, is related to:",
            options: [
              "Anti-defection Law",
              "Fundamental Duties",
              "Judicial Review",
              "Presidential Election"
            ],
            answer: 0
          },
          {
            question: "The 76th Amendment Act, 1994, deals with:",
            options: [
              "Reservation in government jobs",
              "Panchayati Raj Institutions",
              "Reorganization of states",
              "Right to Education"
            ],
            answer: 0
          },
          {
            question: "Which amendment restored judicial review and fundamental rights after the Emergency?",
            options: [
              "44th Amendment",
              "42nd Amendment",
              "52nd Amendment",
              "76th Amendment"
            ],
            answer: 0
          },
          {
            question: "Which amendment granted constitutional status to the National Commission for Backward Classes?",
            options: [
              "91st Amendment",
              "102nd Amendment",
              "42nd Amendment",
              "7th Amendment"
            ],
            answer: 1
          },
          {
            question: "Which amendment added the words \"Socialist\" and \"Secular\" to the Preamble?",
            options: [
              "1st Amendment",
              "44th Amendment",
              "42nd Amendment",
              "91st Amendment"
            ],
            answer: 2
          },
          {
            question: "Which amendment restricted the size of the Council of Ministers to 15% of the legislative strength?",
            options: [
              "91st Amendment",
              "52nd Amendment",
              "73rd Amendment",
              "44th Amendment"
            ],
            answer: 0
          },
          {
            question: "Which amendment aimed to improve urban governance in India?",
            options: [
              "73rd Amendment",
              "74th Amendment",
              "42nd Amendment",
              "76th Amendment"
            ],
            answer: 1
          },
          {
            question: "The 93rd Amendment Act, 2005, deals with:",
            options: [
              "GST",
              "Reservation in private educational institutions",
              "Strengthening the Election Commission",
              "Creation of new states"
            ],
            answer: 1
          },
          {
            question: "Which amendment introduced Article 21A, making education a fundamental right?",
            options: [
              "42nd Amendment",
              "44th Amendment",
              "86th Amendment",
              "102nd Amendment"
            ],
            answer: 2
          },
          {
            question: "Which amendment was introduced during the Emergency period to increase central government power?",
            options: [
              "44th Amendment",
              "42nd Amendment",
              "101st Amendment",
              "73rd Amendment"
            ],
            answer: 1
          },
          {
            question: "Which amendment provided for the formation of Gram Sabha in rural areas?",
            options: [
              "101st Amendment",
              "73rd Amendment",
              "86th Amendment",
              "91st Amendment"
            ],
            answer: 1
          },
          {
            question: "Which amendment gave constitutional status to Scheduled Tribes and Scheduled Castes Commissions?",
            options: [
              "102nd Amendment",
              "42nd Amendment",
              "91st Amendment",
              "52nd Amendment"
            ],
            answer: 2
          }
        ]
      },
      
    }
  },
  unit4: {
    name: "Unit 4: Constitutional Bodies",
    subUnits: {
      "sub1": {
        name: "4.1 Election Commission",
        questions: [
          {
            question: "Which Article of the Indian Constitution guarantees the right to vote?",
            options: [
              "Article 19",
              "Article 21",
              "Article 326",
              "Article 14"
            ],
            answer: 2
          },
          {
            question: "What is the minimum age required to vote in India?",
            options: [
              "16 years",
              "18 years",
              "21 years",
              "25 years"
            ],
            answer: 1
          },
          {
            question: "Which principle ensures that all adult citizens have the right to vote without discrimination?",
            options: [
              "Proportional Representation",
              "Reserved Voting",
              "Universal Adult Suffrage",
              "Preferential Voting"
            ],
            answer: 2
          },
          {
            question: "Which constitutional body is responsible for conducting elections in India?",
            options: [
              "Supreme Court of India",
              "Election Commission of India",
              "Lok Sabha Secretariat",
              "Ministry of Home Affairs"
            ],
            answer: 1
          },
          {
            question: "Which form is used for voter registration in India?",
            options: [
              "Form 10",
              "Form 8",
              "Form 6",
              "Form 12"
            ],
            answer: 2
          },
          {
            question: "What is the main purpose of the Electoral Photo Identity Card (EPIC)?",
            options: [
              "Proof of citizenship",
              "Proof of identity and eligibility to vote",
              "Proof of residence",
              "Proof of age"
            ],
            answer: 1
          },
          {
            question: "Who is responsible for verifying voter registration applications?",
            options: [
              "Election Commission of India",
              "Electoral Registration Officer (ERO)",
              "State Government",
              "Local Police"
            ],
            answer: 1
          },
          {
            question: "Which right allows citizens to contest elections?",
            options: [
              "Right to Vote",
              "Right to Contest Elections",
              "Right to Information",
              "Right to Protest"
            ],
            answer: 1
          },
          {
            question: "Which right enables citizens to access information related to elections?",
            options: [
              "Right to Freedom",
              "Right to Information",
              "Right to Speech",
              "Right to Equality"
            ],
            answer: 1
          },
          {
            question: "Which document is used as proof of registration for voting?",
            options: [
              "PAN Card",
              "Passport",
              "Electoral Photo Identity Card (EPIC)",
              "Aadhaar Card"
            ],
            answer: 2
          },
          {
            question: "What is the role of the Election Commission of India?",
            options: [
              "To conduct elections",
              "To count votes",
              "To create laws",
              "To remove elected representatives"
            ],
            answer: 0
          },
          {
            question: "Which of the following is NOT an electoral right?",
            options: [
              "Right to Free and Fair Elections",
              "Right to Own Property",
              "Right to Vote",
              "Right to Contest Elections"
            ],
            answer: 1
          },
          {
            question: "How often is the electoral roll updated?",
            options: [
              "Every 5 years",
              "Only before General Elections",
              "Continuously",
              "Never"
            ],
            answer: 2
          },
          {
            question: "Who is eligible to register as a voter in India?",
            options: [
              "Any Indian citizen above 18 years of age",
              "Any person residing in India",
              "Anyone who owns property in India",
              "Only government employees"
            ],
            answer: 0
          },
          {
            question: "What happens after a voter submits Form 6?",
            options: [
              "The form is directly accepted",
              "The Election Commission conducts elections",
              "The Electoral Registration Officer (ERO) verifies the details",
              "The voter is required to appear in court"
            ],
            answer: 2
          },
          {
            question: "What is the purpose of the right to free and fair elections?",
            options: [
              "To ensure all candidates win equally",
              "To allow government control over elections",
              "To prevent electoral fraud and coercion",
              "To restrict certain groups from voting"
            ],
            answer: 2
          },
          {
            question: "Which document contains the names of all registered voters in a constituency?",
            options: [
              "Voter ID card",
              "Electoral Roll",
              "Gazette of India",
              "Census Report"
            ],
            answer: 1
          },
          {
            question: "What is the primary function of a Voter ID card?",
            options: [
              "To allow people to travel abroad",
              "To prove eligibility to vote",
              "To apply for government jobs",
              "To pay taxes"
            ],
            answer: 1
          },
          {
            question: "Which of the following is TRUE about voter registration?",
            options: [
              "It is compulsory for all citizens",
              "It is optional but necessary for voting",
              "Only people with government jobs can register",
              "Only men are allowed to register"
            ],
            answer: 1
          },
          {
            question: "Who is responsible for ensuring the integrity of elections in India?",
            options: [
              "The President of India",
              "The Prime Minister of India",
              "The Election Commission of India",
              "The Chief Justice of India"
            ],
            answer: 2
          }
        ]
      },
      "sub2": {
        name: "4.2 UPSC & State PSCs",
        questions: [
          {
            question: "What does ethical electoral participation primarily aim to uphold?",
            options: [
              "Political dominance",
              "Democratic values and integrity",
              "Economic growth",
              "Party loyalty"
            ],
            answer: 1
          },
          {
            question: "Which principle ensures that elections are free and fair?",
            options: [
              "Political propaganda",
              "Respect for democratic principles",
              "Vote-buying",
              "Campaign monopolization"
            ],
            answer: 1
          },
          {
            question: "Which of the following is a key element of ethical electoral participation?",
            options: [
              "Spreading misinformation",
              "Engaging in hate speech",
              "Respect for electoral laws",
              "Intimidating voters"
            ],
            answer: 2
          },
          {
            question: "What is the role of transparency in elections?",
            options: [
              "To confuse voters",
              "To ensure accountability in electoral processes",
              "To allow only a few people to vote",
              "To manipulate vote counts"
            ],
            answer: 1
          },
          {
            question: "Which of the following is considered an unethical electoral practice?",
            options: [
              "Encouraging voter participation",
              "Engaging in fair campaigning",
              "Using state resources for election advantage",
              "Promoting diversity in elections"
            ],
            answer: 2
          },
          {
            question: "Why should political parties conduct fair campaigning?",
            options: [
              "To gain public trust and maintain electoral integrity",
              "To eliminate competition",
              "To manipulate public opinion",
              "To increase personal attacks on opponents"
            ],
            answer: 0
          },
          {
            question: "What is the purpose of civic education in elections?",
            options: [
              "To increase voter turnout",
              "To educate citizens about their electoral rights and responsibilities",
              "To support a specific political party",
              "To make elections more complex"
            ],
            answer: 1
          },
          {
            question: "Which body in India oversees election processes?",
            options: [
              "Supreme Court of India",
              "Parliament of India",
              "Election Commission of India",
              "Ministry of Home Affairs"
            ],
            answer: 2
          },
          {
            question: "Why is acceptance of electoral outcomes important?",
            options: [
              "It ensures political stability and national unity",
              "It benefits only the ruling party",
              "It discourages future elections",
              "It leads to political conflicts"
            ],
            answer: 0
          },
          {
            question: "What is an example of electoral malpractice?",
            options: [
              "Holding peaceful election rallies",
              "Bribing voters to influence their choice",
              "Educating citizens about voting rights",
              "Respecting election rules and laws"
            ],
            answer: 1
          },
          {
            question: "How can civil society contribute to ethical electoral participation?",
            options: [
              "By monitoring elections and exposing irregularities",
              "By supporting one political party",
              "By preventing elections from happening",
              "By spreading rumors about candidates"
            ],
            answer: 0
          },
          {
            question: "What is the role of the media in ethical elections?",
            options: [
              "To spread propaganda",
              "To provide biased news reports",
              "To inform the public and ensure accountability",
              "To suppress information"
            ],
            answer: 2
          },
          {
            question: "Why should candidates and parties avoid hate speech?",
            options: [
              "It can lead to violence and division among citizens",
              "It makes campaigns more interesting",
              "It increases their chances of winning",
              "It ensures that only a certain group can vote"
            ],
            answer: 0
          },
          {
            question: "What does the commitment to electoral reform aim to achieve?",
            options: [
              "Strengthening democratic governance and transparency",
              "Increasing campaign budgets",
              "Reducing voter participation",
              "Favoring certain political parties"
            ],
            answer: 0
          },
          {
            question: "Which of the following should NOT be done during an election campaign?",
            options: [
              "Encouraging informed voting",
              "Using social media responsibly",
              "Spreading false information about opponents",
              "Respecting the electoral code of conduct"
            ],
            answer: 2
          },
          {
            question: "What ensures inclusivity and diversity in elections?",
            options: [
              "Allowing equal participation of all eligible voters",
              "Restricting voting based on economic status",
              "Allowing only specific communities to vote",
              "Preventing certain groups from contesting elections"
            ],
            answer: 0
          },
          {
            question: "How does vote-buying affect elections?",
            options: [
              "It strengthens democracy",
              "It undermines the fairness and credibility of elections",
              "It encourages voter participation",
              "It has no impact on elections"
            ],
            answer: 1
          },
          {
            question: "What is a key indicator of a free and fair election?",
            options: [
              "All voters are pressured to vote for one party",
              "Candidates use state resources for campaigning",
              "Citizens vote without fear or coercion",
              "The winning party decides the election result"
            ],
            answer: 2
          },
          {
            question: "What does ethical electoral participation require from political parties?",
            options: [
              "To create barriers for opposition parties",
              "To uphold honesty, fairness, and transparency",
              "To focus only on winning at any cost",
              "To engage in unethical practices for advantage"
            ],
            answer: 1
          },
          {
            question: "Why is it important to prevent electoral fraud?",
            options: [
              "It strengthens citizens' trust in the electoral process",
              "It ensures a single-party rule",
              "It decreases voter turnout",
              "It eliminates political competition"
            ],
            answer: 0
          }
        ]
      },
      "sub3": {
        name: "4.3 CAG",
        questions: [
          {
            question: "What is the primary goal of motivation and facilitation for electoral participation?",
            options: [
              "To limit voter turnout",
              "To encourage citizens to participate in elections",
              "To manipulate election results",
              "To increase campaign funding"
            ],
            answer: 1
          },
          {
            question: "Which of the following helps in educating citizens about voting rights?",
            options: [
              "Restricting information",
              "Civic education programs",
              "Political party meetings",
              "Government censorship"
            ],
            answer: 1
          },
          {
            question: "Why is accessible information important in elections?",
            options: [
              "To confuse voters",
              "To make voter registration difficult",
              "To help citizens understand the electoral process",
              "To discourage participation"
            ],
            answer: 2
          },
          {
            question: "Which strategy helps register more voters?",
            options: [
              "Voter registration drives",
              "Increasing voting age",
              "Restricting voter registration",
              "Closing polling stations"
            ],
            answer: 0
          },
          {
            question: "Why should voter registration be inclusive?",
            options: [
              "To allow only the rich to vote",
              "To promote fairness and equal representation",
              "To give preference to specific political parties",
              "To reduce voter turnout"
            ],
            answer: 1
          },
          {
            question: "What is the purpose of mobile registration units?",
            options: [
              "To conduct campaigns for political parties",
              "To facilitate voter registration in remote areas",
              "To collect taxes",
              "To prevent people from registering"
            ],
            answer: 1
          },
          {
            question: "Which of the following helps citizens make informed voting decisions?",
            options: [
              "Political propaganda",
              "Voter education workshops",
              "Biased media coverage",
              "Fake news campaigns"
            ],
            answer: 1
          },
          {
            question: "How do public awareness campaigns contribute to electoral participation?",
            options: [
              "By promoting the importance of voting",
              "By discouraging voter turnout",
              "By confusing voters about election dates",
              "By limiting access to information"
            ],
            answer: 0
          },
          {
            question: "What is the role of community engagement in elections?",
            options: [
              "To mobilize local networks for voter participation",
              "To prevent certain groups from voting",
              "To create political divisions",
              "To spread misinformation"
            ],
            answer: 0
          },
          {
            question: "What does early voting aim to achieve?",
            options: [
              "Reduce voter participation",
              "Provide flexible options for voters",
              "Restrict voting rights",
              "Increase election day crowding"
            ],
            answer: 1
          },
          {
            question: "Which of the following is NOT an example of early voting?",
            options: [
              "Absentee voting",
              "Postal voting",
              "Extended polling hours",
              "Voting after election day"
            ],
            answer: 3
          },
          {
            question: "What should polling stations provide to assist voters?",
            options: [
              "Misinformation about candidates",
              "Language assistance and accessibility services",
              "Political party banners",
              "Campaign materials inside the voting area"
            ],
            answer: 1
          },
          {
            question: "Which of the following is an incentive for voter participation?",
            options: [
              "Community recognition programs",
              "Threats of penalties",
              "Forced participation",
              "Restriction of voter rights"
            ],
            answer: 0
          },
          {
            question: "How can election authorities improve the voting experience?",
            options: [
              "By ignoring voter concerns",
              "By establishing feedback mechanisms",
              "By discouraging new voter registrations",
              "By reducing polling stations"
            ],
            answer: 1
          },
          {
            question: "Why should elections be made accessible to persons with disabilities?",
            options: [
              "To ensure equal voting rights for all citizens",
              "To increase political party influence",
              "To prevent opposition votes",
              "To limit participation in elections"
            ],
            answer: 0
          },
          {
            question: "What can be done to encourage voter participation among youth?",
            options: [
              "Exclude them from voter registration",
              "Use digital media and outreach programs",
              "Restrict their voting rights",
              "Increase the voting age"
            ],
            answer: 1
          },
          {
            question: "What role do schools and colleges play in voter registration?",
            options: [
              "They restrict students from voting",
              "They collaborate in voter registration drives",
              "They prevent election discussions",
              "They discourage political involvement"
            ],
            answer: 1
          },
          {
            question: "How does a transparent election system impact democracy?",
            options: [
              "It decreases public trust",
              "It strengthens democratic institutions",
              "It encourages voter fraud",
              "It promotes political bias"
            ],
            answer: 1
          },
          {
            question: "What can be done to improve voter confidence in elections?",
            options: [
              "Provide clear information and assistance",
              "Manipulate voter data",
              "Allow only certain groups to vote",
              "Delay election results"
            ],
            answer: 0
          },
          {
            question: "Why is it important to address voter concerns?",
            options: [
              "To prevent fair elections",
              "To enhance the credibility of the electoral process",
              "To decrease voter participation",
              "To increase political interference"
            ],
            answer: 1
          }
        ]
      },
      "sub4": {
        name: "4.4 Finance Commission",
        questions: [
          {
            question: "What is the primary goal of voter awareness?",
            options: [
              "To encourage people to support a specific party",
              "To educate citizens about their voting rights and responsibilities",
              "To reduce the number of voters in elections",
              "To increase election campaign funding"
            ],
            answer: 1
          },
          {
            question: "Which of the following is NOT a key component of the electoral process?",
            options: [
              "Voter Registration",
              "Vote Counting and Results",
              "Fundraising for candidates",
              "Verification of Identity"
            ],
            answer: 2
          },
          {
            question: "Who is responsible for voter registration?",
            options: [
              "Political parties",
              "Election commissions and electoral authorities",
              "Candidates running for office",
              "News media"
            ],
            answer: 1
          },
          {
            question: "What must voters present at polling stations for verification?",
            options: [
              "A handwritten note",
              "A letter from their employer",
              "Government-approved identification",
              "A newspaper clipping"
            ],
            answer: 2
          },
          {
            question: "What ensures secrecy while voting?",
            options: [
              "Publicly announcing votes",
              "Casting a vote in a confidential manner",
              "Allowing media to record votes",
              "Marking ballots in open areas"
            ],
            answer: 1
          },
          {
            question: "What is one of the rights of voters?",
            options: [
              "The right to force others to vote",
              "The right to vote freely and fairly",
              "The right to bribe election officials",
              "The right to change election results"
            ],
            answer: 1
          },
          {
            question: "What is a key responsibility of voters?",
            options: [
              "Ignoring election deadlines",
              "Registering to vote within deadlines",
              "Selling votes to candidates",
              "Refusing to verify personal information"
            ],
            answer: 1
          },
          {
            question: "What characteristic defines an empowered voter?",
            options: [
              "Making decisions based on emotions rather than facts",
              "Understanding election procedures and political policies",
              "Voting without researching candidates",
              "Ignoring political debates"
            ],
            answer: 1
          },
          {
            question: "What is an example of civic engagement?",
            options: [
              "Avoiding discussions about elections",
              "Participating in community meetings and advocacy efforts",
              "Declining to vote in elections",
              "Spreading misinformation about candidates"
            ],
            answer: 1
          },
          {
            question: "Why should voters analyze campaign messages critically?",
            options: [
              "To blindly support their favorite party",
              "To distinguish facts from misinformation",
              "To ignore election updates",
              "To discourage civic engagement"
            ],
            answer: 1
          },
          {
            question: "What is an ethical behavior expected from voters?",
            options: [
              "Encouraging electoral fraud",
              "Respecting diverse opinions",
              "Selling votes for money",
              "Spreading false information"
            ],
            answer: 1
          },
          {
            question: "How can an empowered voter help others?",
            options: [
              "Discouraging voter participation",
              "Promoting voter awareness and registration",
              "Spreading rumors about candidates",
              "Encouraging people not to vote"
            ],
            answer: 1
          },
          {
            question: "Which of the following is an initiative for increasing voter awareness?",
            options: [
              "Civic education programs in schools",
              "Encouraging voter suppression",
              "Preventing people from registering to vote",
              "Restricting voter information"
            ],
            answer: 0
          },
          {
            question: "How do voter registration drives help?",
            options: [
              "They make voter registration difficult",
              "They encourage voter enrollment at public places",
              "They discourage voter turnout",
              "They support only one political party"
            ],
            answer: 1
          },
          {
            question: "What role do community leaders play in voter awareness?",
            options: [
              "Preventing voter education",
              "Partnering with organizations to distribute voter information",
              "Encouraging people to avoid voting",
              "Spreading fake news about elections"
            ],
            answer: 1
          },
          {
            question: "How can technology improve voter awareness?",
            options: [
              "By restricting voter information to certain groups",
              "By providing election updates and registration details online",
              "By promoting biased political views",
              "By making voting more difficult"
            ],
            answer: 1
          },
          {
            question: "What is the purpose of public service announcements on voter awareness?",
            options: [
              "To discourage voting",
              "To inform citizens about voting procedures and deadlines",
              "To manipulate election results",
              "To encourage voter fraud"
            ],
            answer: 1
          },
          {
            question: "What is a prohibited electoral practice?",
            options: [
              "Conducting voter education programs",
              "Voter intimidation and bribery",
              "Encouraging democratic participation",
              "Organizing peaceful debates"
            ],
            answer: 1
          },
          {
            question: "Why should voters research candidates before elections?",
            options: [
              "To blindly follow a party's choice",
              "To make informed decisions aligned with their values",
              "To ensure that elections are biased",
              "To confuse other voters"
            ],
            answer: 1
          },
          {
            question: "What is the ultimate goal of voter awareness and participation?",
            options: [
              "Strengthening democracy through informed voting",
              "Preventing people from voting",
              "Ensuring one political party always wins",
              "Reducing the importance of elections"
            ],
            answer: 0
          }
        ]
      }
    }
  }
};

const Quiz = ({ username = 'Guest' }) => {
  const [currentUnit, setCurrentUnit] = useState(null);
  const [currentSubUnit, setCurrentSubUnit] = useState(null);
  const [expandedUnit, setExpandedUnit] = useState(null);
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [score, setScore] = useState(0);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [scoreSaved, setScoreSaved] = useState(false);

  const saveScore = async () => {
    try {
      console.log('Saving score for user:', username);
      const unitName = units[currentUnit].name;
      const subUnitName = currentSubUnit ? units[currentUnit].subUnits[currentSubUnit].name : null;
      
      // Add verification logging
      console.log('Current unit data:', {
        currentUnit,
        unitName,
        currentSubUnit,
        subUnitName,
        units: units[currentUnit],
        subUnits: units[currentUnit].subUnits,
      });

      const questions = getQuestions();
      const scoreData = {
        username: username,
        unit: unitName,
        subUnit: subUnitName,
        score: score,
        totalQuestions: questions.length
      };

      // Log the complete score data
      console.log('Sending score data:', scoreData);
      
      const response = await fetch(`${API_URL}/scores/save`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(scoreData)
      });

      const responseData = await response.json();
      console.log('Server response:', responseData);

      if (!response.ok) {
        throw new Error(responseData.message || 'Failed to save score');
      }

      Alert.alert("Success", `Score saved for ${username}!`);
      setScoreSaved(true);
    } catch (error) {
      console.error('Error saving score:', error);
      console.error('Error details:', error.message);
      Alert.alert(
        "Error",
        "Failed to save your score. Please try again."
      );
    }
  };

  const startQuiz = (unit, subUnit = null) => {
    setCurrentUnit(unit);
    setCurrentSubUnit(subUnit);
    setCurrentQuiz(0);
    setScore(0);
    setFeedbackMessage("");
    setCorrectAnswer("");
    setQuizCompleted(false);
    setScoreSaved(false);
  };

  const handleUnitClick = (unit) => {
    setExpandedUnit(expandedUnit === unit ? null : unit);
  };

  const getQuestions = () => {
    if (!currentUnit) return [];
    if (currentSubUnit) {
      return units[currentUnit].subUnits[currentSubUnit].questions;
    }
    return units[currentUnit];
  };

  const checkAnswer = (selected) => {
    const quiz = getQuestions()[currentQuiz];
    if (quiz.answer === selected) {
      setScore(score + 1);
      setFeedbackMessage("Correct!");
      setCorrectAnswer("");
    } else {
      setFeedbackMessage("Wrong! The correct answer is:");
      setCorrectAnswer(quiz.options[quiz.answer]);
    }
  };

  const previousQuestion = () => {
    if (currentQuiz > 0) {
      setCurrentQuiz(currentQuiz - 1);
      setFeedbackMessage("");
      setCorrectAnswer("");
    } else {
      restartQuiz();
    }
  };

  const nextQuestion = () => {
    if (currentQuiz < getQuestions().length - 1) {
      setCurrentQuiz(currentQuiz + 1);
      setFeedbackMessage("");
      setCorrectAnswer("");
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentUnit(null);
    setCurrentQuiz(0);
    setScore(0);
    setFeedbackMessage("");
    setCorrectAnswer("");
    setQuizCompleted(false);
    setScoreSaved(false);
  };

  const loadQuiz = () => {
    const questions = getQuestions();
    if (currentUnit && questions && questions.length > 0 && currentQuiz < questions.length && !quizCompleted) {
      const quiz = questions[currentQuiz];
      const unitName = units[currentUnit].name;
      const subUnitName = units[currentUnit].subUnits[currentSubUnit].name;
      
      return (
        <View style={styles.quizContainer}>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${((currentQuiz + 1) / questions.length) * 100}%` }]} />
          </View>
          <Text style={styles.questionNumber}>Question {currentQuiz + 1} of {questions.length}</Text>
          <Text style={styles.question}>
            {subUnitName}{'\n'}{quiz.question}
          </Text>
          <View style={styles.options}>
            {quiz.options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.optionButton,
                  feedbackMessage !== "" && index === quiz.answer && styles.correctOption,
                  feedbackMessage !== "" && index !== quiz.answer && styles.wrongOption
                ]}
                onPress={() => checkAnswer(index)}
                disabled={feedbackMessage !== ""}
              >
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
          {feedbackMessage && (
            <View style={styles.feedback}>
              <Text style={styles.feedbackText}>{feedbackMessage}</Text>
              {correctAnswer && <Text style={styles.correctAnswer}>{correctAnswer}</Text>}
            </View>
          )}
          <View style={styles.navigation}>
            <TouchableOpacity 
              style={[styles.navButton, currentQuiz === 0 && styles.navButtonDisabled]} 
              onPress={previousQuestion}
              disabled={currentQuiz === 0}
            >
              <Text style={styles.navButtonText}>Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.navButton, { backgroundColor: '#4CAF50' }]} 
              onPress={nextQuestion} 
              disabled={feedbackMessage === ""}
            >
              <Text style={styles.navButtonText}>
                {currentQuiz === questions.length - 1 ? "Finish" : "Next"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return endQuiz();
    }
  };

  const endQuiz = () => {
    const unitName = units[currentUnit].name;
    const subUnitName = units[currentUnit].subUnits[currentSubUnit].name;
    const questions = getQuestions();
    const percentage = Math.round((score / questions.length) * 100);
    
    return (
      <View style={styles.result}>
        <View style={styles.resultHeader}>
          <Text style={styles.resultTitle}>Quiz Completed!</Text>
          <View style={styles.resultIcon}>
            <Text style={styles.resultIconText}>🎉</Text>
          </View>
        </View>
        
        <View style={styles.scoreContainer}>
          <View style={styles.scoreCircle}>
            <Text style={styles.scorePercentage}>{percentage}%</Text>
            <Text style={styles.scoreLabel}>Score</Text>
          </View>
          <View style={styles.scoreDetails}>
            <Text style={styles.scoreText}>
              You scored {score} out of {questions.length}
            </Text>
            <Text style={styles.subUnitText}>{subUnitName}</Text>
          </View>
        </View>

        <View style={styles.resultButtons}>
          {!scoreSaved && (
            <TouchableOpacity 
              style={styles.saveButton} 
              onPress={saveScore}
            >
              <Text style={styles.saveButtonText}>Save Score</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity 
            style={styles.resultButton} 
            onPress={restartQuiz}
          >
            <Text style={styles.resultButtonText}>Back to Units</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={true}
        >
          <View style={styles.overlay}>
            {currentUnit === null ? (
              <View style={styles.unitSelection}>
                <Text style={styles.heading}>!!Quizzes!!</Text>
                {Object.keys(units).map((unit, index) => (
                  <View key={index}>
                    <TouchableOpacity 
                      style={[
                        styles.unitButton,
                        expandedUnit === unit && styles.activeUnitButton
                      ]} 
                      onPress={() => handleUnitClick(unit)}
                    >
                      <View style={styles.unitButtonContent}>
                        <Text style={[
                          styles.arrowIcon,
                          expandedUnit === unit && styles.arrowIconRotated
                        ]}>
                          ▼
                        </Text>
                        <Text style={styles.unitButtonText}>
                          {units[unit].name}
                        </Text>
                      </View>
                    </TouchableOpacity>
                    {expandedUnit === unit && (
                      <View style={styles.subUnitContainer}>
                        {Object.entries(units[unit].subUnits).map(([subUnitKey, subUnit], subIndex) => (
                          <TouchableOpacity
                            key={subIndex}
                            style={styles.subUnitButton}
                            onPress={() => startQuiz(unit, subUnitKey)}
                          >
                            <Text style={styles.subUnitButtonText}>{subUnit.name}</Text>
                          </TouchableOpacity>
                        ))}
                      </View>
                    )}
                  </View>
                ))}
              </View>
            ) : (
              loadQuiz()
            )}
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    minHeight: '100%',
  },
  quizContainer: {
    width: "95%",
    backgroundColor: "#ffffff",
    padding: 25,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    marginVertical: 20,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    marginBottom: 15,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 4,
  },
  questionNumber: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
    textAlign: 'center',
  },
  question: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    lineHeight: 28,
  },
  options: {
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: "#f8f9fa",
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#dee2e6',
  },
  correctOption: {
    backgroundColor: '#d4edda',
    borderColor: '#c3e6cb',
  },
  wrongOption: {
    backgroundColor: '#f8d7da',
    borderColor: '#f5c6cb',
  },
  optionText: {
    color: "#333",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 22,
  },
  feedback: {
    marginTop: 20,
    marginBottom: 10,
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#dee2e6',
  },
  feedbackText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  correctAnswer: {
    fontSize: 16,
    color: "#28a745",
    fontStyle: 'italic',
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
    gap: 10,
  },
  navButton: {
    flex: 1,
    backgroundColor: "#6c757d",
    padding: 15,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  navButtonDisabled: {
    backgroundColor: '#adb5bd',
  },
  navButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: '600',
  },
  result: {
    width: "95%",
    backgroundColor: "#ffffff",
    padding: 30,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    alignItems: "center",
    marginVertical: 20,
  },
  resultHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  resultTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000080',
    marginRight: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  resultIcon: {
    backgroundColor: '#f8f9fa',
    padding: 10,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#000080',
  },
  resultIconText: {
    fontSize: 30,
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    width: '100%',
  },
  scoreCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    shadowColor: '#4CAF50',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  scorePercentage: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  scoreLabel: {
    fontSize: 16,
    color: '#ffffff',
    marginTop: 5,
    fontWeight: '500',
  },
  scoreDetails: {
    flex: 1,
  },
  scoreText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  subUnitText: {
    fontSize: 18,
    color: '#666',
    fontStyle: 'italic',
  },
  resultButtons: {
    width: '100%',
    gap: 15,
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    padding: 18,
    borderRadius: 12,
    width: '100%',
    elevation: 3,
    shadowColor: '#4CAF50',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
  },
  resultButton: {
    backgroundColor: '#FF5722',
    padding: 18,
    borderRadius: 12,
    width: '100%',
    elevation: 3,
    shadowColor: '#FF5722',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  resultButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
  },
  unitSelection: {
    width: "95%",
  },
  unitButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 8,
    marginVertical: 12,
    borderRadius: 12,
    borderWidth: 3,
    borderColor: '#000080',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  unitButtonContent: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  activeUnitButton: {
    backgroundColor: 'rgba(240, 240, 240, 0.9)',
  },
  unitButtonText: {
    color: '#000080s',
    fontSize: 20,
    flex: 1,
    fontWeight: '500',
    paddingLeft: 10,
  },
  arrowIcon: {
    color: '#000080',
    fontSize: 24,
    width: 30,
    textAlign: 'center',
  },
  arrowIconRotated: {
    transform: [{ rotate: '0deg' }],
  },
  subUnitContainer: {
    marginLeft: 20,
    marginTop: 5,
    marginBottom: 10,
  },
  subUnitButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 12,
    marginVertical: 6,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#000080',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  subUnitButtonText: {
    color: '#000080s',
    fontSize: 16,
    textAlign: 'left',
    paddingLeft: 10,
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000080',
    marginBottom: 30,
    textAlign: 'center',
  },
});

export default Quiz;
