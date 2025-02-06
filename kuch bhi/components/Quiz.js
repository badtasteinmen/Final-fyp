import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity,ImageBackground} from "react-native";
// Import your image (you can use a local image or a URL)
import backgroundImage from "../assets/back.png"; // Replace with your image path
        const units = {
          unit1: [
            {
              question:
                "What does the phrase 'We, the people of India' signify in the Preamble?",
              options: [
                "Social equality",
                "Popular sovereignty",
                "Economic justice",
                "Judicial independence",
              ],
              answer: 1,
            },
            {
              question:
                "Which of the following terms in the Preamble indicates India's independence from external control?",
              options: ["Socialist", "Secular", "Sovereign", "Republic"],
              answer: 2,
            },
            {
              question: "What does 'Secular' in the Preamble imply?",
              options: [
                "The state gives preference to a particular religion",
                "The state is a monarchy",
                "The state treats all religions equally",
                "The state is controlled by a religious body",
              ],
              answer: 2,
            },
            {
              question:
                "Which principle in the Preamble guarantees equal rights and opportunities to all citizens?",
              options: ["Justice", "Liberty", "Equality", "Fraternity"],
              answer: 2,
            },
            {
              question: "The word 'Republic' in the Preamble signifies:",
              options: [
                "Rule by a monarch",
                "Head of state is elected",
                "Judicial review",
                "Separation of powers",
              ],
              answer: 1,
            },
            {
              question:
                "In which case was the Doctrine of Basic Structure first established?",
              options: [
                "Indira Nehru Gandhi v. Raj Narain",
                "Kesavananda Bharati v. State of Kerala",
                "Minerva Mills v. Union of India",
                "Golaknath v. State of Punjab",
              ],
              answer: 1,
            },
            {
              question:
                "Which of the following is NOT a part of the Basic Structure Doctrine?",
              options: [
                "Judicial review",
                "Federalism",
                "Fundamental Duties",
                "Supremacy of the Constitution",
              ],
              answer: 2,
            },
            {
              question: "What does the Basic Structure Doctrine limit?",
              options: [
                "The power of the President",
                "The amendment powers of Parliament",
                "The role of the Supreme Court",
                "The financial powers of the state",
              ],
              answer: 1,
            },
            {
              question:
                "Which case reaffirmed the Basic Structure Doctrine after Kesavananda Bharati?",
              options: [
                "Golaknath v. State of Punjab",
                "Minerva Mills v. Union of India",
                "Shankari Prasad v. Union of India",
                "A.K. Gopalan v. State of Madras",
              ],
              answer: 1,
            },
            {
              question:
                "Which part of the Indian Constitution contains the Fundamental Rights?",
              options: ["Part II", "Part III", "Part IV", "Part V"],
              answer: 1,
            },
            {
              question: "Which of the following is NOT a Fundamental Right?",
              options: [
                "Right to Property",
                "Right to Freedom of Religion",
                "Right against Exploitation",
                "Cultural and Educational Rights",
              ],
              answer: 0,
            },
            {
              question: "The Directive Principles of State Policy are:",
              options: [
                "Justiciable",
                "Non-justiciable",
                "Fundamental Rights",
                "Enforceable in courts",
              ],
              answer: 1,
            },
            {
              question:
                "How many articles were there in the original Indian Constitution?",
              options: ["350", "365", "395", "410"],
              answer: 2,
            },
            {
              question:
                "The Indian Constitution follows the concept of Single Citizenship, which means:",
              options: [
                "Citizens have rights only in their state",
                "Only residents of India have rights",
                "All citizens have the same rights across India",
                "Dual citizenship is allowed",
              ],
              answer: 2,
            },
            {
              question:
                "Which feature makes India a Federal country with a Unitary bias?",
              options: [
                "Directive Principles of State Policy",
                "Parliamentary system of government",
                "Division of powers between Union and States",
                "Universal adult suffrage",
              ],
              answer: 2,
            },
            {
              question:
                "Which article allows for the declaration of a National Emergency?",
              options: [
                "Article 356",
                "Article 360",
                "Article 352",
                "Article 370",
              ],
              answer: 2,
            },
            {
              question:
                "The procedure for amending the Indian Constitution is provided in which article?",
              options: [
                "Article 368",
                "Article 356",
                "Article 370",
                "Article 343",
              ],
              answer: 0,
            },
            {
              question:
                "What does the Indian Constitution provide for under Article 51A?",
              options: [
                "Fundamental Rights",
                "Fundamental Duties",
                "Universal suffrage",
                "Judicial review",
              ],
              answer: 1,
            },
            {
              question:
                "Which of the following is a unique feature of the Indian Constitution?",
              options: [
                "Written Constitution",
                "Unwritten Constitution",
                "Based on customary law",
                "Limited Fundamental Rights",
              ],
              answer: 0,
            },
          ],
          unit2: [
            {
              question:
                "Which Article of the Indian Constitution guarantees 'Equality before the law and equal protection of the laws'?",
              options: ["Article 14", "Article 17", "Article 18", "Article 16"],
              answer: 0,
            },
            {
              question:
                "Article 17 of the Indian Constitution abolishes which practice?",
              options: [
                "Child labor",
                "Untouchability",
                "Human trafficking",
                "Titles",
              ],
              answer: 1,
            },
            {
              question:
                "How many fundamental freedoms are protected under Article 19?",
              options: ["3", "5", "6", "8"],
              answer: 2,
            },
            {
              question: "What does Article 20 protect against?",
              options: [
                "Freedom of religion",
                "Right to education",
                "Conviction for offenses",
                "Discrimination",
              ],
              answer: 2,
            },
            {
              question:
                "Article 21A provides free and compulsory education to children of which age group?",
              options: [
                "3-10 years",
                "6-14 years",
                "10-18 years",
                "14-21 years",
              ],
              answer: 1,
            },
            {
              question: "Article 23 prohibits which practice?",
              options: [
                "Child labor",
                "Trafficking and forced labor",
                "Religious discrimination",
                "Capital punishment",
              ],
              answer: 1,
            },
            {
              question: "What does Article 25 protect?",
              options: [
                "Right to property",
                "Freedom of religion",
                "Freedom of speech",
                "Right to form unions",
              ],
              answer: 1,
            },
            {
              question:
                "Which Article allows minorities to establish educational institutions?",
              options: ["Article 29", "Article 26", "Article 30", "Article 28"],
              answer: 2,
            },
            {
              question:
                "The 'Right to Constitutional Remedies' is enshrined in which Article?",
              options: ["Article 12", "Article 18", "Article 32", "Article 35"],
              answer: 2,
            },
            {
              question:
                "Which of the following is NOT a Fundamental Duty under Article 51A?",
              options: [
                "To protect the environment",
                "To defend the country",
                "To uphold the Right to Property",
                "To value and preserve cultural heritage",
              ],
              answer: 2,
            },
            {
              question:
                "In which Amendment were the Fundamental Duties added to the Constitution?",
              options: [
                "44th Amendment",
                "42nd Amendment",
                "73rd Amendment",
                "86th Amendment",
              ],
              answer: 1,
            },
            {
              question:
                "Which Directive Principle directs the state to provide free and compulsory education?",
              options: ["Article 38", "Article 39", "Article 45", "Article 48"],
              answer: 2,
            },
            {
              question: "Which case laid down the Basic Structure Doctrine?",
              options: [
                "Golak Nath Case",
                "Kesavananda Bharati Case",
                "Minerva Mills Case",
                "State of Gujarat vs. Mirzapur Case",
              ],
              answer: 1,
            },
            {
              question:
                "Which case is associated with invalidating part of Article 31C in the 42nd Amendment?",
              options: [
                "Kesavananda Bharati Case",
                "Minerva Mills Case",
                "State of Gujarat Case",
                "Golak Nath Case",
              ],
              answer: 1,
            },
            {
              question:
                "Which Articles are protected under Article 31C, preventing them from being challenged on grounds of violating Fundamental Rights?",
              options: [
                "Articles 39(b) and 39(c)",
                "Articles 14 and 19",
                "Articles 25 and 26",
                "Articles 21 and 32",
              ],
              answer: 0,
            },
          ],
          unit3: [
            {
              question:
                "Which amendment introduced restrictions on freedom of speech and expression?",
              options: [
                "First Amendment",
                "Twenty-Fourth Amendment",
                "Forty-Second Amendment",
                "Eighty-Sixth Amendment",
              ],
              answer: 0,
            },
            {
              question:
                "What was the main objective of the Seventh Amendment Act, 1956?",
              options: [
                "To reorganize states on a linguistic basis",
                "To introduce the Anti-Defection Law",
                "To provide for Fundamental Duties",
                "To restore civil liberties post-Emergency",
              ],
              answer: 0,
            },
            {
              question: "Which amendment made education a fundamental right?",
              options: [
                "Eighty-Sixth Amendment",
                "Ninety-First Amendment",
                "Forty-Fourth Amendment",
                "Seventy-Third Amendment",
              ],
              answer: 0,
            },
            {
              question:
                "The Forty-Second Amendment is often referred to as what?",
              options: [
                "The Mini-Constitution",
                "The Anti-Defection Law",
                "The Right to Education",
                "The GST Amendment",
              ],
              answer: 0,
            },
            {
              question:
                "Which amendment established the National Judicial Appointments Commission (NJAC)?",
              options: [
                "Ninety-Ninth Amendment",
                "One Hundredth Amendment",
                "One Hundred and First Amendment",
                "One Hundred and Fifth Amendment",
              ],
              answer: 0,
            },
            {
              question:
                "What did the Twenty-Fifth Amendment Act, 1971, change regarding the right to property?",
              options: [
                "Made it a fundamental right",
                "Removed it as a fundamental right",
                "Enhanced its protections",
                "Added it to Directive Principles",
              ],
              answer: 1,
            },
            {
              question:
                "Which amendment extended the reservation for Scheduled Castes and Scheduled Tribes in the Lok Sabha and state assemblies for another 10 years?",
              options: [
                "One Hundred and Fourth Amendment",
                "One Hundred and Fifth Amendment",
                "Eighty-Sixth Amendment",
                "Seventy-Fourth Amendment",
              ],
              answer: 0,
            },
            {
              question:
                "Which of the following amendments is known for introducing the Goods and Services Tax (GST)?",
              options: [
                "One Hundred and First Amendment",
                "One Hundred and Third Amendment",
                "One Hundred and Fourth Amendment",
                "One Hundred and Second Amendment",
              ],
              answer: 0,
            },
            {
              question:
                "The Seventy-Third Amendment Act, 1992, is significant for giving constitutional status to which institution?",
              options: [
                "Municipalities",
                "Panchayati Raj Institutions",
                "Lok Sabha",
                "Rajya Sabha",
              ],
              answer: 1,
            },
            {
              question:
                "Which amendment removed the reserved seats for Anglo-Indians in the Lok Sabha and state legislative assemblies?",
              options: [
                "One Hundred and Second Amendment",
                "One Hundred and Fourth Amendment",
                "One Hundred and Fifth Amendment",
                "Ninety-First Amendment",
              ],
              answer: 1,
            },
            {
              question:
                "Which of the following subjects is included in the Union List?",
              options: ["Agriculture", "Police", "Defense", "Local Government"],
              answer: 2,
            },
            {
              question:
                "Under which Article can Parliament legislate on a State List subject in the national interest?",
              options: [
                "Article 256",
                "Article 249",
                "Article 253",
                "Article 356",
              ],
              answer: 1,
            },
            {
              question:
                "What is the primary purpose of the Finance Commission?",
              options: [
                "To legislate on state subjects",
                "To recommend how tax revenues should be shared between the Centre and states",
                "To oversee the functioning of All-India Services",
                "To manage interstate disputes",
              ],
              answer: 1,
            },
            {
              question:
                "Which of the following articles deals with the Inter-State Council?",
              options: [
                "Article 256",
                "Article 263",
                "Article 280",
                "Article 292",
              ],
              answer: 1,
            },
            {
              question:
                "What is the consequence of a National Emergency declared under Article 352?",
              options: [
                "States lose their financial autonomy",
                "States can legislate freely",
                "The Centre cannot legislate on State subjects",
                "States come under the control of the President",
              ],
              answer: 0,
            },
            {
              question:
                "Which tax is exclusively levied by the State Governments?",
              options: [
                "Income Tax",
                "Goods and Services Tax",
                "Sales Tax",
                "Customs Duty",
              ],
              answer: 2,
            },
            {
              question:
                "Which body plays a crucial role in deciding GST rates?",
              options: [
                "Planning Commission",
                "Finance Commission",
                "GST Council",
                "Inter-State Council",
              ],
              answer: 2,
            },
            {
              question: "What is meant by 'Residuary Powers'?",
              options: [
                "Powers that belong solely to the States",
                "Powers not enumerated in any list, which are under Parliament's jurisdiction",
                "Powers shared between the Centre and States",
                "Powers granted during an emergency",
              ],
              answer: 1,
            },
            {
              question:
                "What triggers the imposition of President's Rule in a state?",
              options: [
                "National Emergency",
                "Financial Emergency",
                "Failure of constitutional machinery in the state",
                "A resolution by the Rajya Sabha",
              ],
              answer: 2,
            },
            {
              question:
                "Which of the following is an example of cooperative federalism in India?",
              options: [
                "All-India Services",
                "National Emergency",
                "State Emergency",
                "Financial Emergency",
              ],
              answer: 0,
            },
          ],
          unit4: [
            {
              question:
                "Which article of the Indian Constitution guarantees the right to vote?",
              options: [
                "Article 324",
                "Article 326",
                "Article 14",
                "Article 19",
              ],
              answer: 1,
            },
            {
              question: "What is the minimum age required for voting in India?",
              options: ["16 years", "18 years", "21 years", "25 years"],
              answer: 1,
            },
            {
              question: "What does 'universal adult suffrage' mean?",
              options: [
                "Right to contest elections",
                "Right to vote for all adults",
                "Right to free education",
                "Right to property",
              ],
              answer: 1,
            },
            {
              question:
                "Which constitutional body is responsible for conducting elections in India?",
              options: [
                "Supreme Court",
                "Parliament",
                "Election Commission of India",
                "Ministry of Home Affairs",
              ],
              answer: 2,
            },
            {
              question: "Which form is used to register as a voter in India?",
              options: ["Form 4", "Form 6", "Form 8", "Form 10"],
              answer: 1,
            },
            {
              question:
                "What document is issued to registered voters in India?",
              options: [
                "Aadhaar Card",
                "Passport",
                "Electoral Photo Identity Card (EPIC)",
                "Ration Card",
              ],
              answer: 2,
            },
            {
              question:
                "Who verifies voter registration applications in India?",
              options: [
                "Police Department",
                "District Magistrate",
                "Electoral Registration Officer (ERO)",
                "Election Commission Chairman",
              ],
              answer: 2,
            },
            {
              question:
                "Which of the following is not part of electoral rights in India?",
              options: [
                "Right to Vote",
                "Right to Contest Elections",
                "Right to Free Education",
                "Right to Information",
              ],
              answer: 2,
            },
            {
              question: "What is the role of the Election Commission of India?",
              options: [
                "Appointing judges",
                "Conducting elections and overseeing voter registration",
                "Formulating economic policies",
                "Maintaining law and order",
              ],
              answer: 1,
            },
            {
              question:
                "What is the purpose of continuously updating the electoral roll?",
              options: [
                "To add new voters and remove ineligible ones",
                "To increase voter turnout",
                "To promote political campaigns",
                "To reduce election expenses",
              ],
              answer: 0,
            },
            {
              question:
                "Which of the following is NOT an aspect of ethical electoral participation?",
              options: [
                "Fair campaigning",
                "Respect for electoral laws",
                "Bribery to gain votes",
                "Transparency and accountability",
              ],
              answer: 2,
            },
            {
              question: "What does ethical electoral participation promote?",
              options: [
                "Electoral fraud",
                "Hate speech in campaigns",
                "Inclusivity and diversity",
                "Violence for electoral advantage",
              ],
              answer: 2,
            },
            {
              question:
                "Why is transparency important in electoral participation?",
              options: [
                "To prevent voters from participating",
                "To ensure trust and accountability in the electoral process",
                "To favor a particular candidate",
                "To make elections complicated",
              ],
              answer: 1,
            },
            {
              question:
                "Which of the following is considered an electoral malpractice?",
              options: [
                "Conducting a peaceful campaign",
                "Promoting diversity in elections",
                "Voter intimidation",
                "Respecting election outcomes",
              ],
              answer: 2,
            },
            {
              question:
                "What is the key role of civil society organizations in elections?",
              options: [
                "Conducting polls",
                "Overseeing electoral processes and ensuring fairness",
                "Promoting biased information",
                "Supporting a single candidate",
              ],
              answer: 1,
            },
            {
              question: "What does 'respect for electoral outcomes' mean?",
              options: [
                "Accepting the election results only if your candidate wins",
                "Disregarding the election results if not satisfied",
                "Accepting the election results, whether your candidate wins or loses",
                "Contesting the results in all cases",
              ],
              answer: 2,
            },
            {
              question:
                "What is required for ethical electoral participation regarding electoral laws?",
              options: [
                "Violating laws to gain advantage",
                "Strict adherence to electoral laws and regulations",
                "Using loopholes in the law",
                "Ignoring election codes of conduct",
              ],
              answer: 1,
            },
            {
              question:
                "Which principle is upheld by ethical electoral participation?",
              options: [
                "Use of state resources for campaign purposes",
                "Fair and free elections",
                "Election fraud",
                "Misleading the public",
              ],
              answer: 1,
            },
            {
              question:
                "What role does civic education play in ethical electoral participation?",
              options: [
                "Encourages unethical behavior during elections",
                "Promotes informed and responsible voting decisions",
                "Discourages voter participation",
                "Spreads misinformation about candidates",
              ],
              answer: 1,
            },
            {
              question:
                "Why is commitment to electoral reform important in ethical participation?",
              options: [
                "To prevent election results",
                "To ensure continuous improvement of the electoral process",
                "To reduce voter turnout",
                "To allow manipulation of votes",
              ],
              answer: 1,
            },
          ],
        };

        const Quiz = () => {
          const [currentUnit, setCurrentUnit] = useState(null);
          const [currentQuiz, setCurrentQuiz] = useState(0);
          const [score, setScore] = useState(0);
          const [answerFeedback, setAnswerFeedback] = useState(null); // New state for answer feedback
        
          const startQuiz = (unit) => {
            setCurrentUnit(unit);
            setCurrentQuiz(0);
            setScore(0);
            setAnswerFeedback(null); // Reset feedback when starting a new quiz
          };
        
          const loadQuiz = () => {
            if (currentUnit && currentQuiz < units[currentUnit].length) {
              const quiz = units[currentUnit][currentQuiz];
              return (
                <View style={styles.quizContainer}>
                  <Text style={styles.question}>
                    {currentUnit.toUpperCase()} - Q{currentQuiz + 1}: {quiz.question}
                  </Text>
                  <View style={styles.options}>
                    {quiz.options.map((option, index) => (
                      <TouchableOpacity
                        key={index}
                        style={styles.optionButton}
                        onPress={() => checkAnswer(index)}
                      >
                        <Text style={styles.optionText}>{option}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                  {answerFeedback && ( // Show feedback if available
                    <Text style={styles.feedbackText}>{answerFeedback}</Text>
                  )}
                  <View style={styles.navigation}>
                    <TouchableOpacity
                      style={styles.navButton}
                      onPress={previousQuestion}
                      disabled={currentQuiz === 0}
                    >
                      <Text style={styles.navButtonText}>Previous</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.navButton}
                      onPress={nextQuestion}
                      disabled={currentQuiz === units[currentUnit].length - 1}
                    >
                      <Text style={styles.navButtonText}>Next</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            } else {
              return endQuiz();
            }
          };
        
          const checkAnswer = (selected) => {
            const quiz = units[currentUnit][currentQuiz];
            if (quiz.answer === selected) {
              setScore(score + 1);
              setAnswerFeedback("Correct!"); // Set feedback for correct answer
            } else {
              setAnswerFeedback(`Wrong! The correct answer is: ${quiz.options[quiz.answer]}`); // Set feedback for wrong answer
            }
            setTimeout(() => {
              setCurrentQuiz(currentQuiz + 1); // Move to the next question after a delay
              setAnswerFeedback(null); // Reset feedback for the next question
            },); // 2 seconds delay before moving to the next question
          };
        
          const previousQuestion = () => {
            if (currentQuiz > 0) {
              setCurrentQuiz(currentQuiz - 1);
              setAnswerFeedback(null); // Reset feedback when navigating
            }
          };
        
          const nextQuestion = () => {
            if (currentQuiz < units[currentUnit].length - 1) {
              setCurrentQuiz(currentQuiz + 1);
              setAnswerFeedback(null); // Reset feedback when navigating
            }
          };
        
          const endQuiz = () => (
            <View style={styles.result}>
              <Text style={styles.resultText}>Quiz Completed!</Text>
              <Text style={styles.resultText}>
                You scored {score} out of {units[currentUnit].length} in{" "}
                {currentUnit.toUpperCase()}.
              </Text>
              <TouchableOpacity style={styles.resultButton} onPress={restartQuiz}>
                <Text style={styles.resultButtonText}>Back to Unit Selection</Text>
              </TouchableOpacity>
            </View>
          );
        
          const restartQuiz = () => {
            setCurrentUnit(null);
            setCurrentQuiz(0);
            setScore(0);
            setAnswerFeedback(null); // Reset feedback when restarting
          };

  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
    <View style={styles.overlay}>
      {currentUnit === null ? (
        <View style={styles.unitSelection}>
          <TouchableOpacity
            style={styles.unitButton}
            onPress={() => startQuiz("unit1")}
          >
            <Text style={styles.unitButtonText}>Start Unit 1 Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.unitButton}
            onPress={() => startQuiz("unit2")}
          >
            <Text style={styles.unitButtonText}>Start Unit 2 Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.unitButton}
            onPress={() => startQuiz("unit3")}
          >
            <Text style={styles.unitButtonText}>Start Unit 3 Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.unitButton}
            onPress={() => startQuiz("unit4")}
          >
            <Text style={styles.unitButtonText}>Start Unit 4 Quiz</Text>
          </TouchableOpacity>
        </View>
      ) : (
        loadQuiz()
      )}
    </View>
  </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f7f7f7",
  },
  quizContainer: {
    width: "90%",
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#333",
  },
  options: {
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: "#4CAF50",
    padding: 12,
    borderRadius: 5,
    marginVertical: 8,
  },
  optionText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
  navButton: {
    backgroundColor: "#007BFF",
    padding: 12,
    borderRadius: 5,
    width: "45%",
  },
  navButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
  result: {
    alignItems: "center",
    padding: 20,
  },
  resultText: {
    fontSize: 18,
    marginBottom: 10,
    color: "#333",
  },
  resultButton: {
    backgroundColor: "#FF5722",
    padding: 12,
    borderRadius: 5,
    marginTop: 20,
  },
  resultButtonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  unitSelection: {
    width: "80%",
  },
  unitButton: {
    backgroundColor: "#6200EE",
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  unitButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
  },
});

export default Quiz;
