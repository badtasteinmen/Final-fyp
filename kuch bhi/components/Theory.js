import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";

import backgroundImage from "../assets/back.png";

const units = [
  {
    title: "Unit 1: The Preamble and Fundamental Concepts",
    content: [
      {
        title: "The Preamble",
        description: "WE, THE PEOPLE OF INDIA, having solemnly resolved to constitute India into a SOVEREIGN, SOCIALIST, SECULAR, DEMOCRATIC, REPUBLIC and to secure to all its citizens: JUSTICE, social, economic, and political LIBERTY of thought, expression, belief, faith, and worship; EQUALITY of status and of opportunity; and to promote among them all FRATERNITY assuring the dignity of the individual and the unity and integrity of the Nation; IN OUR CONSTITUENT ASSEMBLY this twenty-sixth day of November, 1949, do HEREBY ADOPT, ENACT AND GIVE TO OURSELVES THIS CONSTITUTION.",
      },
      {
        title: "1.1: The Preamble of the Indian Constitution",
        description: `The Preamble of the Constitution of India serves as an introductory statement that outlines the guiding principles and objectives of the Constitution. It encapsulates the essence of the Constitution and reflects the aspirations and ideals of the people of India.

Structure of the Preamble:

Start
↓
"We, the People of India" → Shows Democracy and Popular Sovereignty
↓
Sovereign → India is Independent
↓
Socialist → Ensures Social & Economic Equality
↓
Secular → Equal Respect for All Religions
↓
Democratic → Leaders Elected by People
↓
Republic → President is Elected (Not Hereditary)
↓
Justice → Social, Economic & Political Fairness
↓
Liberty → Freedom of Thought, Expression, Worship
↓
Equality → Equal Rights & Opportunities
↓
Fraternity → Promotes Unity & Brotherhood
↓
End

The Preamble begins with the phrase "We, the people of India," emphasizing the sovereignty of the Indian citizens and their role in shaping the nation's destiny. It then lays down the following objectives:

Justice: The preamble seeks to secure justice, which includes social, economic, and political justice. It aims to ensure equality of opportunity and status for all citizens and to eliminate inequalities.

Liberty: The preamble emphasizes securing liberty for all citizens, which includes freedom of thought, expression, belief, faith, and worship. It also aims to ensure freedom of association, movement, and residence.

Equality: The preamble strives to promote equality among all citizens, irrespective of caste, creed, religion, race, or gender. It seeks to eliminate discrimination and promote a sense of fraternity among all citizens.

Fraternity: The preamble promotes the spirit of brotherhood and unity among the people of India, transcending diversities. It emphasizes the need for harmony and the fostering of a sense of common identity and belonging.

Securing to all its citizens: The Preamble asserts that these objectives are not mere aspirations but are to be actively pursued and realized, ensuring that all citizens of India benefit from these principles.

The Preamble serves as a moral compass for the nation and guides the interpretation and implementation of the Constitution. It reflects the democratic, secular, socialist, and republic character of the Indian state and sets the tone for the governance and functioning of the country.

Meaning of the Constitution of India:

The Constitution of India is the supreme law of the land, serving as the fundamental legal document that governs the country. It lays down the framework for the organization, powers, and functions of the government, as well as the rights and duties of its citizens.

Here are some key aspects of the Constitution of India:

Supreme Authority: The Constitution of India is the highest legal authority in the country. All laws, regulations, and actions by the government must conform to its provisions.

Written Document: Unlike the United Kingdom, India has a written constitution. It is composed of a preamble, several articles, and schedules that outline various aspects of governance, rights, and duties.

Federal Structure: The Constitution establishes a federal system of government with a division of powers between the central government and the states. It delineates the powers and responsibilities of each level of government to prevent conflicts and ensure effective governance.

Fundamental Rights: One of the most significant features of the Indian Constitution is the enshrinement of fundamental rights. These rights guarantee individual liberties such as the right to equality, freedom of speech, freedom of religion, and the right to constitutional remedies. They serve as a safeguard against arbitrary actions by the state.

Directive Principles of State Policy: The Constitution also includes Directive Principles of State Policy, which provide guidelines for the government to achieve social and economic justice. Though not enforceable by courts, they serve as moral directives for governance.

Secularism: India's Constitution declares the country to be a secular state, ensuring that the government does not favor any religion and grants freedom of religion to all citizens.

Republicanism and Democracy: India is declared a sovereign, socialist, secular, and democratic republic in the preamble of its Constitution. This signifies that the ultimate power rests with the people, who elect their representatives through democratic processes.

Amendment Procedure: The Constitution provides for its own amendment to adapt to changing times and needs. However, certain fundamental aspects of the Constitution cannot be altered easily and require special procedures.

Overall, the Constitution of India serves as the cornerstone of Indian democracy, providing a comprehensive framework for governance, protecting individual rights, promoting social justice, and ensuring the unity and integrity of the nation.`,
      },
      {
        title: "1.2: Doctrine of Basic Structure",
        description: `The Doctrine of Basic Structure is a judicial principle established by the Supreme Court of India to safeguard the core principles and framework of the Constitution from arbitrary amendments by the legislature. This doctrine holds that while the Indian Parliament has the power to amend the Constitution under Article 368, it cannot alter its basic structure or essential features.

Here are key points regarding the Doctrine of Basic Structure:

1. Origin: The Doctrine of Basic Structure was first articulated by the Supreme Court of India in the historic case of Kesavananda Bharati v. State of Kerala in 1973. This landmark case arose in response to a series of constitutional amendments enacted by the Indian Parliament, which sought to curtail the power of the judiciary and expand parliamentary sovereignty.

2. Scope: The Doctrine of Basic Structure identifies certain fundamental principles and features of the Constitution that are considered essential and immutable. These include, but are not limited to, the supremacy of the Constitution, the democratic framework, the rule of law, federalism, separation of powers, judicial review, and the fundamental rights guaranteed to citizens.

3. Judicial Review: The Supreme Court of India, acting as the guardian of the Constitution, has the authority to review constitutional amendments and determine whether they violate the basic structure. If an amendment is found to infringe upon the basic structure, it can be declared unconstitutional and void by the court.

4. Evolution: Over the years, the Doctrine of Basic Structure has evolved through various judicial pronouncements. The Supreme Court has clarified and expanded upon the core principles that constitute the basic structure, ensuring that it remains adaptable to changing socio-political circumstances while retaining its foundational integrity.

5. Flexibility and Stability: While the Doctrine of Basic Structure provides a safeguard against arbitrary amendments, it also allows for the evolution and adaptation of the Constitution in response to the needs of a dynamic society. It strikes a balance between flexibility and stability, ensuring that the Constitution remains relevant and resilient over time.

6. Limitations: Despite its significance, the Doctrine of Basic Structure is not without limitations. There is ongoing debate and interpretation regarding what constitutes the basic structure, and the Supreme Court has the ultimate authority to determine its scope and application in specific cases.

Process of Constitutional Amendment and Basic Structure:

Start
↓
Can Parliament Amend the Constitution?
↓
(Yes) → Under Article 368 → But Does it Affect Basic Structure?
↓
(No) → Amendment Allowed → End
↓
(Yes) → Supreme Court Review → Declared Unconstitutional → End

Key Components of the Basic Structure:
• Supremacy of the Constitution
• Republican and democratic form of government
• Secularism
• Separation of powers
• Judicial review
• Federalism
• Unity and integrity of the nation
• Sovereignty of India
• Individual freedom and fundamental rights

Overall, the Doctrine of Basic Structure serves as a bulwark against erosion of the foundational principles of the Indian Constitution, ensuring that it remains true to its core values of democracy, equality, liberty, and justice.

Historical Perspectives of the Constitution of India:

The historical perspectives of the Constitution of India are deeply rooted in India's struggle for independence and the socio-political developments that shaped the country's journey towards nationhood. Here's a brief overview:

1. Pre-Independence Era:
- The demand for a written constitution in India can be traced back to the late 19th and early 20th centuries. Leaders of the Indian National Congress, such as Dadabhai Naoroji, Gopal Krishna Gokhale, and Motilal Nehru, advocated for constitutional reforms and self-governance within the British Empire.
- The Montagu-Chelmsford Reforms (1919) and the Government of India Act (1935) introduced limited legislative and executive powers to Indian representatives, laying the groundwork for future constitutional developments.

2. Constituent Assembly:
- After India gained independence from British rule in 1947, the Constituent Assembly was convened to draft a new constitution for the country. The Assembly, consisting of elected representatives from across the country, deliberated on various socio-political issues and formulated the guiding principles for the Constitution.
- The drafting committee, chaired by Dr. B.R. Ambedkar, played a crucial role in synthesizing diverse viewpoints and shaping the final text of the Constitution.

3. Influences and Inspirations:
- The Constitution of India drew inspiration from various sources, including the constitutions of other countries, historical documents, and principles of justice, liberty, equality, and fraternity.
- It incorporated elements from the Government of India Act (1935), as well as features from the constitutions of countries like the United States, the United Kingdom, Canada, Australia, and Ireland.

4. Key Features:
- The Constitution of India, adopted on January 26, 1950, declared India a sovereign, socialist, secular, and democratic republic in its preamble. It established a federal system of government with a strong emphasis on fundamental rights, directive principles of state policy, and the separation of powers.
- The Constitution enshrined the principles of equality before the law, freedom of speech and expression, secularism, and the protection of minority rights.

5. Evolution and Amendments:
- Since its adoption, the Constitution of India has undergone several amendments to address emerging challenges and societal needs. Amendments have been made to expand the scope of fundamental rights, restructure state boundaries, and introduce reforms in various spheres of governance.
- Notably, the doctrine of basic structure, established by the Supreme Court in the Kesavananda Bharati case (1973), has served to preserve the core principles and values of the Constitution from arbitrary amendments.

Overall, the historical perspectives of the Constitution of India reflect a remarkable journey of nation-building, democratic consolidation, and the enduring commitment to upholding the principles of justice, liberty, equality, and fraternity.`,
      },
      {
        title: "1.3: Salient Features of the Indian Constitution",
        description: `The Constitution of India is characterized by several salient features that distinguish it from other constitutions around the world. It is a comprehensive and detailed document that lays down the legal and institutional framework for governance in India. It is unique in many respects, reflecting the country's diverse social, cultural, and political landscape.

Key Features of the Indian Constitution:

Start
↓
Longest Written Constitution → 395 Articles (Initially)
↓
Sovereign, Socialist, Secular, Democratic, Republic
↓
Fundamental Rights & Duties → Protect Citizens' Liberties
↓
Parliamentary System → PM & Ministers Accountable to Lok Sabha
↓
Federal Structure with Unitary Bias → Center is Stronger in Crisis
↓
Independent Judiciary → Checks & Balances
↓
Universal Adult Franchise → Every Citizen Can Vote
↓
Bicameral Legislature → Lok Sabha + Rajya Sabha
↓
Emergency Provisions → Special Powers in Crisis
↓
End

Detailed Explanation of Key Features:

1. Lengthy and Detailed: 
The Constitution of India is one of the longest and most detailed constitutions in the world, comprising a preamble, 448 articles, and 12 schedules. It covers a wide range of topics, including fundamental rights, directive principles of state policy, federalism, judiciary, and more.

2. Federal System with Unitary Bias: 
India has a federal system of government, where powers are divided between the central government and the states. However, the Constitution also contains provisions that give significant powers to the central government during emergencies, leading to a unitary bias in times of crisis.

3. Parliamentary Democracy: 
India follows the parliamentary form of government, where the executive is responsible to the legislature (Parliament). The President, who is the head of state, is largely a ceremonial figure, while the Prime Minister, as the head of government, holds real executive powers.

4. Fundamental Rights: 
The Constitution guarantees several fundamental rights to its citizens, including the right to equality, freedom of speech and expression, freedom of religion, and the right to constitutional remedies. These rights are justiciable, meaning individuals can seek legal remedies if they are violated by the state.

5. Directive Principles of State Policy: 
The Constitution contains Directive Principles of State Policy, which are guidelines for the government to achieve social and economic justice. Though not enforceable by courts, they are considered fundamental in the governance of the country.

6. Independent Judiciary: 
India has an independent judiciary with the Supreme Court at the apex. The judiciary acts as the guardian of the Constitution and has the power of judicial review to ensure that laws and actions of the government are in conformity with the Constitution.

7. Secularism: 
The Indian Constitution declares India to be a secular state, ensuring equal treatment of all religions by the state. It prohibits discrimination based on religion and maintains a separation between religion and state affairs.

8. Amendment Procedure: 
The Constitution provides for its own amendment to adapt to changing circumstances. Amendments can be made by Parliament, but certain provisions require a special majority or ratification by most states to ensure stability and protect the basic structure of the Constitution.

9. Single Citizenship:
Unlike some federal countries, India has a single citizenship for the entire country. Every citizen of India enjoys the same rights and privileges, regardless of the state they reside in.

10. Universal Adult Suffrage:
All citizens above the age of 18 can vote, regardless of caste, gender, or religion.

11. Bicameral Legislature:
The Parliament consists of the Lok Sabha (lower house) and Rajya Sabha (upper house).

12. Emergency Provisions:
The Constitution allows for emergencies, such as national, state, and financial emergencies, providing special powers to the government.

13. Fundamental Duties:
Added in 1976, these duties highlight moral obligations for citizens, including respecting the Constitution and protecting the environment.

14. Provisions for Minorities and Weaker Sections:
Special provisions exist for the protection and upliftment of minorities and weaker sections, including reservations.

15. Official Language:
Hindi is the official language, but English is also used for official purposes, and states may have their own official languages.

These characteristics reflect the diverse and inclusive nature of the Indian Constitution, which seeks to uphold democratic principles, promote social justice, and ensure the unity and integrity of the nation.`,
      },
      {
        title: "1.4: Key Characteristics of the Indian Constitution",
        description: `The Constitution of India has several defining characteristics that make it a unique and robust legal document. These characteristics ensure that it not only provides a framework for governance but also protects the rights and freedoms of its citizens.

Start
↓
Written Constitution → Clear Outline of Powers & Duties
↓
Lengthiest Constitution → 395 Articles & 8 Schedules Initially
↓
Sovereign, Socialist, Secular, Democratic Republic
↓
Federal Structure with Unitary Bias
↓
Parliamentary System → Council of Ministers & PM
↓
Fundamental Rights → Protection of Civil Liberties
↓
Directive Principles → Guidelines for State Welfare
↓
Fundamental Duties → Moral Obligations for Citizens
↓
Independent Judiciary → Judicial Review Powers
↓
Single Citizenship → Equal Rights for All
↓
Secularism → Religious Freedom & Equality
↓
Universal Adult Suffrage → Voting Rights (18+)
↓
Bicameral Legislature → Lok Sabha & Rajya Sabha
↓
Emergency Provisions → Wide Powers During Crisis
↓
Amendability → Basic Structure Intact
↓
Special State Provisions → e.g., J&K (Article 370)
↓
Minority Protection → SC, ST, OBC Rights
↓
Official Language → Hindi & English
↓
End

1. Written Constitution
- The Indian Constitution is a single, comprehensive written document, unlike constitutions like the UK, which is mostly unwritten. It clearly spells out the powers, responsibilities, and limitations of various branches of government and the rights of citizens.

2. Lengthiest Constitution
- The Indian Constitution is the longest written constitution in the world. It originally had 395 articles in 22 parts and 8 schedules. Over time, amendments have expanded the Constitution, making it extensive and detailed to address the needs of a diverse nation.

3. Sovereign, Socialist, Secular, Democratic Republic
- The Preamble of the Constitution declares India to be a sovereign, socialist, secular, democratic republic, highlighting the core values of Indian democracy:
  - Sovereign: India is free from external control.
  - Socialist: The state aims for social and economic equality.
  - Secular: The state treats all religions equally.
  - Democratic: The people elect their representatives.
  - Republic: The head of state (President) is elected.

4. Federal Structure with Unitary Bias
- The Constitution establishes a federal system with a clear division of powers between the Union (central government) and the States. However, it gives more power to the Union, especially during emergencies, showing a unitary tilt in certain situations.
   
5. Parliamentary System of Government
- India follows a parliamentary system like that of the United Kingdom. The executive (Prime Minister and Council of Ministers) is responsible to the legislature (Parliament), particularly the directly elected Lok Sabha. The President is the nominal head of the state, while the Prime Minister is the head of the government.

6. Fundamental Rights
- The Constitution guarantees Fundamental Rights (Part III, Articles 12-35) to all citizens, ensuring civil liberties such as:
  - Right to Equality
  - Right to Freedom
  - Right against Exploitation
  - Right to Freedom of Religion
  - Cultural and Educational Rights
  - Right to Constitutional Remedies

7. Directive Principles of State Policy (DPSP)
- The Directive Principles of State Policy (Part IV) are guidelines for the government to follow in order to promote social and economic welfare. Although non-justiciable (not enforceable by courts), they reflect the goals the state should strive to achieve, such as equitable distribution of resources and improving public health and education.

8. Fundamental Duties
- Added by the 42nd Amendment (1976), the Constitution outlines Fundamental Duties (Article 51A) for Indian citizens. These duties promote a sense of moral responsibility, including respecting national symbols, protecting the environment, and upholding the unity of the nation.

9. Independent Judiciary
- The Constitution establishes an independent judiciary, with the Supreme Court at its apex, followed by High Courts and subordinate courts. The judiciary is independent of the executive and legislature, ensuring the rule of law and protecting the rights of citizens. The judiciary also has the power of judicial review, which allows it to strike down laws or actions that violate the Constitution.

10. Single Citizenship
- India follows the principle of single citizenship, meaning that all citizens enjoy the same rights and obligations throughout the country, regardless of the state they belong to. This promotes national unity and prevents division on regional lines.

11. Secularism
- The Constitution declares India a secular state, ensuring that the state does not favor or discriminate against any religion. Citizens have the right to profess, practice, and propagate their religion, and the state maintains a neutral stance toward all religions.

12. Universal Adult Suffrage
- The Constitution guarantees universal adult suffrage, granting the right to vote to every citizen above the age of 18, irrespective of caste, gender, religion, or economic status. This ensures a broad-based and inclusive democracy.

13. Bicameral Legislature
- The Indian Parliament is bicameral, consisting of two houses:
  - Lok Sabha (House of the People): The lower house, with members elected directly by the people.
  - Rajya Sabha (Council of States): The upper house, with members elected by the state legislatures and some nominated by the President.

14. Emergency Provisions
- The Constitution provides for the declaration of an emergency under certain conditions, which grants special powers to the Union government:
  - National Emergency (Article 352): In case of war, external aggression, or armed rebellion.
  - State Emergency (Article 356): If the governance in a state fails to adhere to constitutional provisions.
  - Financial Emergency (Article 360): If the financial stability of India is threatened.

15. Amendability
- The Constitution provides a clear procedure for its amendment under Article 368. While the Constitution can be amended to adapt to changing circumstances, some parts, especially the basic structure, cannot be altered, as ruled by the Supreme Court in the Kesavananda Bharati case (1973).

16. Special Provisions for Certain States and Regions
- The Constitution includes special provisions for certain states and regions, allowing for flexibility in governance. For example:
  - Article 370 (now abrogated) provided special autonomy to Jammu and Kashmir.
  - Article 371 grants special provisions for states like Nagaland, Mizoram, and others.

17. Provisions for Minority Protection
- The Constitution includes specific provisions to protect the rights and interests of minorities, Scheduled Castes (SCs), Scheduled Tribes (STs), and Other Backward Classes (OBCs), including reservations in educational institutions and public employment.

18. Official Language
- The Constitution recognizes Hindi in the Devanagari script as the official language of India (Article 343), while English is to be used for official purposes as well. States are free to have their own official languages.

Conclusion:
The characteristics of the Indian Constitution reflect its democratic, federal, and secular nature while ensuring a balance between flexibility and rigidity. Its provisions are designed to accommodate the diverse socio-political and cultural landscape of India while maintaining the integrity and unity of the nation.`,
      }
    ]
  },
  {
    title: "Unit 2: Fundamental Rights, Duties, and DPSPs",
    content: [
      {
        title: "2.1: Fundamental Rights",
        description: `The Fundamental Rights guaranteed by the Constitution of India are enshrined in Part III (Articles 12 to 35). These rights are essential for the overall development of individuals and are justiciable, meaning that citizens can approach the courts for their enforcement.

Structure of Fundamental Rights:

Start
↓
Fundamental Rights (Part III, Articles 12-35)
↓
6 Main Categories:
↓
Right to Equality (Articles 14-18)
• Equal Rights Before Law
• No Discrimination
• No Caste Discrimination
• No Titles
↓
Right to Freedom (Articles 19-22)
• Freedom of Speech
• Freedom of Assembly
• Freedom of Association
• Freedom of Movement
• Freedom to Settle
• Freedom of Business
↓
Right against Exploitation (Articles 23-24)
• Prohibition of Human Trafficking
• Prohibition of Child Labor
↓
Right to Religion (Articles 25-28)
• Freedom of Religion
• No Forced Religious Taxation
↓
Cultural & Educational Rights (Articles 29-30)
• Protection of Minorities
• Right to Run Educational Institutions
• Language Protection
↓
Right to Constitutional Remedies (Article 32)
• Supreme Court Writs
• High Court Remedies
↓
End

The Constitution of India guarantees several fundamental rights to its citizens, which are enshrined in Part III (Articles 12 to 35) of the Constitution. These fundamental rights are essential for the protection and well-being of Indian citizens, ensuring their dignity, liberty, and equality before the law. They serve as the bedrock of democracy and justice in India.

Here is a detailed list of the fundamental rights recognized in the Indian Constitution:

1. Right to Equality (Articles 14-18):
   a. Equality before law (Article 14)
   b. Prohibition of discrimination on grounds of religion, race, caste, sex, or place of birth (Article 15)
   c. Equality of opportunity in matters of public employment (Article 16)
   d. Abolition of untouchability (Article 17)
   e. Abolition of titles (Article 18)

2. Right to Freedom (Articles 19-22):
   a. Freedom of speech and expression (Article 19(1)(a))
   b. Freedom to assemble peacefully and without arms (Article 19(1)(b))
   c. Freedom to form associations or unions (Article 19(1)(c))
   d. Freedom to move freely throughout the territory of India (Article 19(1)(d))
   e. Freedom to reside and settle in any part of the territory of India (Article 19(1)(e))
   f. Freedom to practice any profession, or to carry on any occupation, trade, or business (Article 19(1)(g))
   g. Protection in respect of conviction for offenses (Article 20)
   h. Protection of life and personal liberty (Article 21)
   i. Protection against arrest and detention in certain cases (Article 22)

3. Right against Exploitation (Articles 23-24):
   a. Prohibition of traffic in human beings and forced labor (Article 23)
   b. Prohibition of employment of children in hazardous industries (Article 24)

4. Right to Freedom of Religion (Articles 25-28):
   a. Freedom of conscience and free profession, practice, and propagation of religion (Article 25)
   b. Freedom to manage religious affairs (Article 26)
   c. Freedom from payment of taxes for promotion of any particular religion (Article 27)
   d. Freedom from attending religious instruction or religious worship in educational institutions wholly maintained by the state (Article 28)

5. Cultural and Educational Rights (Articles 29-30):
   a. Protection of interests of minorities (Article 29)
   b. Right of minorities to establish and administer educational institutions (Article 30)

6. Right to Constitutional Remedies (Article 32):
   a. Right to move the Supreme Court for the enforcement of fundamental rights (Article 32)

Detailed Explanation of Fundamental Rights:

Right to Equality (Articles 14-18):

Article 14: Equality before the law and equal protection of the laws.
Article 15: Prohibition of discrimination on grounds of religion, race, caste, sex, or place of birth.
Article 16: Equality of opportunity in matters of public employment.
Article 17: Abolition of untouchability.
Article 18: Abolition of titles, except military and academic distinctions.

Right to Freedom (Articles 19-22):

Article 19: Protection of six fundamental freedoms:
• Freedom of speech and expression
• Freedom to assemble peaceably and without arms
• Freedom to form associations or unions
• Freedom to move freely throughout the territory of India
• Freedom to reside and settle in any part of India
• Freedom to practice any profession, or to carry on any occupation, trade, or business

Article 20: Protection in respect of conviction for offenses (no ex post facto law, no double jeopardy, and protection against self-incrimination).
Article 21: Protection of life and personal liberty.
Article 21A: Right to education (free and compulsory education for children between the ages of 6 and 14 years).
Article 22: Protection against arrest and detention in certain cases, including rights of the arrested persons.

Right against Exploitation (Articles 23-24):

Article 23: Prohibition of human trafficking and forced labor.
Article 24: Prohibition of child labor in factories, mines, or hazardous employment for children below 14 years.

Right to Freedom of Religion (Articles 25-28):

Article 25: Freedom of conscience and the right to freely profess, practice, and propagate religion.
Article 26: Freedom to manage religious affairs.
Article 27: Freedom from payment of taxes for the promotion of any religion.
Article 28: Freedom from attending religious instruction or worship in certain educational institutions.

Cultural and Educational Rights (Articles 29-30):

Article 29: Protection of interests of minorities to conserve their culture, language, and script.
Article 30: Right of minorities to establish and administer educational institutions.

Right to Constitutional Remedies (Article 32):

Article 32: Right to move the Supreme Court or High Courts for the enforcement of fundamental rights. It is also known as the 'Right to Constitutional Remedies' or the 'heart and soul of the Constitution,' as termed by Dr. B.R. Ambedkar.

These Fundamental Rights are essential for ensuring the protection of individual liberties, promoting social justice, and maintaining the rule of law in India. They serve as the cornerstone of democracy and ensure that the government respects and upholds the rights of its citizens.`,
      },
      {
        title: "2.2: Fundamental Duties",
        description: `The Fundamental Duties are a set of moral obligations enshrined in Part IV-A of the Indian Constitution (Article 51A). While they are not enforceable by law, they are considered fundamental to the well-being of society and the nation.

Start
↓
11 Key Duties for Indian Citizens
↓
Respect the Constitution & National Symbols
• Respect Constitution
• Honor National Flag
• Honor National Anthem
↓
Defend the Nation
• Defend Country if Called Upon
• Maintain Unity & Integrity
↓
Protect Environment
• Protect Forests
• Safeguard Wildlife
• Preserve Natural Resources
↓
Promote Scientific Temper & Unity
• Develop Scientific Mindset
• Promote Harmony & Brotherhood
• Reject Practices Against Women
↓
Support Democracy & Development
• Support Panchayati Raj
• Strive for Excellence
• Work for National Development
↓
Value Heritage & Education
• Preserve Rich Cultural Heritage
• Value Composite Culture
• Educate Children (6-14 years)
↓
End

General Fundamental Duties:

1. To abide by the Constitution and respect its ideals and institutions, the National Flag, and the National Anthem.

2. To cherish and follow the noble ideals that inspired the national struggle for freedom.

3. To uphold and protect the sovereignty, unity, and integrity of India.

4. To defend the country and render national service when called upon to do so.

5. To promote harmony and the spirit of common brotherhood among all the people of India transcending religious, linguistic, and regional or sectional diversities.

6. To renounce practices derogatory to the dignity of women.

7. To value and preserve the rich heritage of our composite culture.

8. To protect and improve the natural environment including forests, lakes, rivers, and wildlife, and to have compassion for living creatures.

9. To develop the scientific temper, humanism, and the spirit of inquiry and reform.

10. To safeguard public property and to abjure violence.

11. To strive towards excellence in all spheres of individual and collective activity.

12. To provide opportunities for education to children between the ages of 6 and 14 years.

Relevance to the Engineering Field:

1. Develop the Scientific Temper and Spirit of Inquiry: Engineers are at the forefront of innovation and technological advancement. It is their duty to foster a scientific temper and curiosity, promoting research and development in various engineering disciplines.

2. Protect and Improve the Natural Environment: Engineering activities often have significant impacts on the environment. Engineers have a responsibility to design and implement projects that minimize environmental degradation, promote sustainability, and preserve natural resources.

3. Safeguard Public Property: Engineers are often involved in the design, construction, and maintenance of public infrastructure such as roads, bridges, and buildings. It is their duty to ensure the integrity and safety of these structures, safeguarding public property for the benefit of society.

4. Strive Towards Excellence: Engineering professionals should strive for excellence in their work, maintaining high standards of professionalism, ethics, and quality. By continuously improving their skills and knowledge, engineers contribute to the overall development and progress of the nation.

5. Provide Opportunities for Education: Engineers can contribute to the fulfillment of this duty by actively participating in educational initiatives, such as mentoring students, conducting workshops, and promoting STEM (Science, Technology, Engineering, and Mathematics) education to children and youth.

Significance of Fundamental Duties:

1. To abide by the Constitution and respect its ideals and institutions: This duty emphasizes the importance of respecting the Constitution, the supreme law of the land, and upholding its principles and institutions. It fosters a sense of allegiance to the democratic values and institutions of the country.

2. To cherish and follow the noble ideals that inspired the national struggle for freedom: This duty reminds citizens to honor and uphold the ideals of freedom, justice, equality, and fraternity that inspired the Indian independence movement. It encourages citizens to remain committed to the nation's historical struggle for liberty and self-determination.

3. To uphold and protect the sovereignty, unity, and integrity of India: This duty requires citizens to safeguard the sovereignty, unity, and integrity of the nation against internal and external threats. It promotes national unity and solidarity, emphasizing the importance of preserving India's territorial integrity and sovereignty.

4. To defend the country and render national service when called upon to do so: This duty emphasizes the obligation of citizens to defend the country and contribute to its defense forces when necessary. It instills a sense of duty towards national security and defense, ensuring the protection of the nation and its citizens.

5. To promote harmony and the spirit of common brotherhood among all the people of India transcending religious, linguistic, and regional or sectional diversities: This duty encourages citizens to foster unity, harmony, and fraternity among the diverse communities of India. It promotes social cohesion, tolerance, and inclusivity, thereby strengthening the fabric of Indian society.

6. To renounce practices derogatory to the dignity of women: This duty underscores the importance of respecting and upholding the dignity and rights of women in society. It aims to eliminate discriminatory practices and attitudes towards women, promoting gender equality and empowerment.

7. To value and preserve the rich heritage of our composite culture: This duty emphasizes the preservation and promotion of India's diverse cultural heritage, traditions, and values. It encourages citizens to cherish and respect the cultural pluralism and heritage of the country, fostering a sense of pride in India's cultural richness.

8. To protect and improve the natural environment including forests, lakes, rivers, and wildlife, and to have compassion for living creatures: This duty highlights the importance of environmental conservation and sustainable development. It calls upon citizens to protect and preserve the natural environment and wildlife, promoting ecological balance and environmental sustainability.

9. To develop the scientific temper, humanism, and the spirit of inquiry and reform: This duty encourages citizens to cultivate a scientific temper, rational thinking, and a spirit of inquiry and innovation. It promotes a culture of critical thinking, humanism, and progress, fostering a society that values knowledge, reason, and intellectual freedom.

10. To safeguard public property and to abjure violence: This duty emphasizes the responsibility of citizens to protect and preserve public property and resources. It promotes civic responsibility and non-violence, discouraging destructive behavior and vandalism.

11. To strive towards excellence in all spheres of individual and collective activity: This duty encourages citizens to pursue excellence and quality in their personal and collective endeavors. It promotes a culture of excellence, innovation, and continuous improvement, contributing to the overall progress and development of the nation.

12. To provide opportunities for education to children between the ages of 6 and 14 years: This duty underscores the importance of universal education and the right to education for children. It calls upon the state and citizens to ensure access to education for all children, promoting literacy, knowledge, and skill development.

These Fundamental Duties are integral to the promotion of a responsible and enlightened citizenry, contributing to the overall welfare, progress, and unity of the nation. They complement the Fundamental Rights and serve as guiding principles for citizenship and governance in India.

Overall, while the Fundamental Duties outlined in the Constitution apply to all citizens, including engineers, their fulfillment within the engineering field can significantly contribute to the welfare and progress of society.`,
      },
      {
        title: "2.3: Directive Principles of State Policy",
        description: `The Directive Principles of State Policy (DPSP), outlined in Part IV of the Indian Constitution, are guidelines for the state to follow in order to achieve social and economic justice. Although they are non-justiciable (i.e., they cannot be enforced in a court of law), they are fundamental in the governance of the country. Fundamental Rights (Part III), on the other hand, are enforceable in courts, and any violation of these rights can be challenged.

Start
↓
Directive Principles of State Policy (DPSPs)
↓
Relationship Between DPSP and Fundamental Rights
• DPSPs are Non-Justiciable but Guide State Policy
• Fundamental Rights are Justiciable and Enforceable
↓
Situations Where DPSP Prevails Over Fundamental Rights:
↓
1. Amendments to the Constitution (42nd Amendment, 1976)
• Expanded Article 31C to protect all DPSPs (later revoked)
• Initially prevented challenge under Articles 14 & 19
↓
2. Judicial Interpretations
• Kesavananda Bharati Case (1973) → Basic Structure Doctrine
• Minerva Mills Case (1980) → DPSPs cannot override all FRs
↓
3. Social Welfare Legislation & DPSP
• Land Reforms & Zamindari Abolition upheld despite FR conflicts
• Right to Education (Article 21A) derived from DPSP (Article 45)
↓
4. Article 31C - Special DPSPs (Article 39b & 39c)
• Laws implementing equitable resource distribution override FRs
↓
5. Key Examples Where DPSP Prevailed
• Reservation Policies (Article 46) → Overrules Right to Equality
• Environmental Laws (Article 48A) → Restrict Freedom of Trade
↓
End

In the Indian Constitution, while fundamental rights are justiciable and enforceable by courts, directive principles of state policy (DPSP) are non-justiciable in nature, meaning they are not enforceable by courts but are guidelines for the government to formulate policies and laws. However, there may be situations where directive principles prevail over fundamental rights indirectly. Here are some scenarios where this might occur:

1. Social Welfare Legislation: If a law enacted by the government to promote social welfare and implement directive principles comes into conflict with certain fundamental rights, the courts may uphold the law if it can be justified as reasonable and in the public interest. For example, laws related to land reform, labor rights, and environmental protection may prioritize directive principles over individual rights.

2. Reservation Policies: The Constitution allows for reservation of seats in educational institutions and public employment for socially and educationally backward classes (as per Article 15(4) and Article 16(4)). While these policies may limit the right to equality (Article 14), they are considered necessary to fulfill the directive principle of promoting social justice and equality of opportunity.

3. Welfare of Children: Laws aimed at protecting the rights and welfare of children, such as compulsory education (Article 21A), child labor laws, and laws against child abuse and exploitation, may prioritize directive principles over certain individual rights, especially if they are deemed essential for the well-being of society.

4. Environmental Protection: Laws and regulations aimed at protecting the environment and promoting sustainable development may sometimes restrict individual rights, such as property rights or freedom of trade and occupation, to achieve the directive principle of protecting and improving the natural environment (Article 48A).

5. Public Health Measures: During public health emergencies or for the promotion of public health in general, the government may enact laws or policies that restrict certain individual rights, such as freedom of movement or assembly, to protect public health and implement the directive principle of promoting public health (Article 47).

6. Agricultural Reforms: Laws related to agricultural reforms, such as land redistribution, cooperative farming, and agricultural subsidies, may prioritize directive principles related to rural development and agricultural prosperity (Articles 39(b), 39(c), and 43) over certain individual property rights.

In these situations, while fundamental rights remain important, the courts may give precedence to directive principles if they find that the government's actions are aimed at fulfilling the broader objectives of social justice, economic equality, and the overall welfare of society as envisioned in the Constitution.

Relevance of Directive Principles of State Policy under part-IV A:

The Directive Principles of State Policy (DPSP), enshrined in Part IV-A of the Indian Constitution, provide guidelines for the government to formulate policies and laws for the welfare and development of the people. While these principles are not enforceable by courts, they are considered fundamental to the governance of the country and serve as a moral and political compass for policymakers. Here are the key aspects highlighting the relevance of Directive Principles of State Policy:

1. Social and Economic Justice: The DPSP emphasizes the promotion of social and economic justice by ensuring equitable distribution of wealth, resources, and opportunities among all sections of society. They call for the elimination of inequalities and the provision of equal pay for equal work, thus striving towards a more just and inclusive society.

2. Welfare of the People: The DPSP prioritizes the welfare of the people by advocating for measures to improve their standard of living, health, and well-being. They mandate the state to provide for public health, education, and social security, thereby ensuring the necessities of life for all citizens.

3. Promotion of Gandhian Principles: Many DPSP are inspired by the principles of Mahatma Gandhi, such as rural development, village panchayats, and cottage industries. They emphasize the importance of decentralized governance, self-sufficiency, and community-based development, aligning with Gandhian ideals of grassroots empowerment and rural upliftment.

4. Cultural and Educational Development: The DPSP promote cultural and educational development by advocating for the protection and preservation of India's diverse cultural heritage and the promotion of scientific and technical education. They aim to foster a sense of cultural pride and identity while promoting intellectual and technological progress.

5. Environmental Protection: Several DPSP highlight the importance of environmental conservation and sustainable development. They call for the protection and improvement of the natural environment, including forests, lakes, rivers, and wildlife, and promote sustainable resource management practices to ensure the well-being of present and future generations.

6. International Peace and Security: The DPSP emphasizes the promotion of international peace and security by advocating for peaceful coexistence, respect for international law, and the settlement of international disputes through dialogue and diplomacy. They underscore India's commitment to global peace and cooperation.

7. Limitations and Constraints: While the DPSP provide important policy objectives, their implementation may be constrained by financial, administrative, and political considerations. The state must balance the pursuit of directive principles with practical constraints and competing priorities, ensuring that policies are feasible, sustainable, and effective.

Overall, the Directive Principles of State Policy are relevant as guiding principles for governance, promoting social justice, economic development, cultural preservation, and environmental sustainability. While not legally enforceable, they reflect the aspirations and ideals of the Constitution and serve as a framework for policymaking and legislative action aimed at achieving the overall welfare and progress of the people of India.`
      }
    ]
  },
  {
    title: "Unit 3: Constitutional Amendments",
    content: [
      {
        title: "3.1: Constitutional Amendments",
        description: `India's Constitution has been amended several times to address evolving political, social, and economic needs. As of now, there are 105 constitutional amendments. These amendments reflect India's efforts to balance democracy, social justice, federalism, economic development, and national security.

Start
↓
Constitutional Amendments
↓
1st Amendment (1951)
• Added 9th Schedule (Laws immune from judicial review)
• Enabled reservations for SCs, STs, OBCs
• Imposed reasonable restrictions on freedom of speech
↓
7th Amendment (1956)
• Reorganized states on linguistic basis
• Abolished A, B, C, D categories of states
↓
24th Amendment (1971)
• Parliament got power to amend any part of Constitution
↓
42nd Amendment (1976) - The Mini-Constitution
• Added 'Socialist,' 'Secular,' 'Integrity' to Preamble
• Made DPSPs stronger than Fundamental Rights
• Extended President's Rule from 6 months to 1 year
↓
73rd & 74th Amendments (1992)
• Constitutional status to Panchayati Raj
• Constitutional status to Municipalities
↓
86th Amendment (2002)
• Made Right to Education a Fundamental Right
• Compulsory education for children 6-14 years
↓
101st Amendment (2016)
• Introduced Goods & Services Tax (GST)
↓
103rd Amendment (2019)
• 10% reservation for Economically Weaker Sections
↓
End

List of the major constitutional amendments made to the Constitution of India:

1. First Amendment Act, 1951: Introduced changes to protect laws providing for the acquisition of estates and to impose reasonable restrictions on the freedom of speech and expression.

2. Seventh Amendment Act, 1956: Reorganized the states on a linguistic basis and made changes to the representation of states in the Rajya Sabha.

3. Tenth Amendment Act, 1961: Extended the period of reservation of seats for the Scheduled Castes and Scheduled Tribes in the Lok Sabha and state legislatures.

4. Twelfth Amendment Act, 1962: Limited the application of the right to property as a fundamental right and introduced certain exceptions.

5. Fourteenth Amendment Act, 1962: Removed the requirement of the President's recommendation for the introduction of certain bills in state legislatures.

6. Twenty-Fifth Amendment Act, 1971: Extended the period of reservation of seats for the Scheduled Castes and Scheduled Tribes in the Lok Sabha and state legislatures.

7. Forty-Second Amendment Act, 1976: Made several changes, including the insertion of Fundamental Duties, changes in the Preamble, and the extension of the term of Parliament and state legislatures during emergencies.

8. Forty-Third Amendment Act, 1977: Inserted new provisions related to preventive detention and amended Article 74 and Article 156.

9. Forty-Fourth Amendment Act, 1978: Limited the scope of judicial review by amending Article 368 and placed the election of the President and Vice-President beyond the scope of judicial review.

10. Fifty-Second Amendment Act, 1985: Placed the election of the President and Vice-President beyond the scope of judicial review.

11. Sixty-First Amendment Act, 1989: Lowered the voting age from 21 to 18 years.

12. Ninety-First Amendment Act, 2003: Inserted provisions related to the creation of the National Commission for Scheduled Castes and the National Commission for Scheduled Tribes.

13. Ninety-Third Amendment Act, 2005: Inserted provisions related to reservation of seats in educational institutions for socially and educationally backward classes.

14. One Hundred and First Amendment Act, 2016: Introduced the Goods and Services Tax (GST) regime, amending various provisions related to taxation.

Amendment procedure of the Constitution and their types - simple and special procedures:

The amendment procedure of the Constitution of India is outlined in Article 368, which specifies the methods by which changes can be made to the Constitution. The procedure includes both simple and special procedures. Here's an overview of the amendment procedure and its types:

1. Simple Procedure:
- Under the simple procedure, certain amendments can be made by Parliament through a prescribed legislative process. These amendments do not require the consent of state legislatures.
- The following types of amendments fall under the simple procedure:
  - Amendments affecting matters specified in Article 368 but not listed in the provisos to clause (2) of the article.
  - Amendments affecting matters specified in Article 368 and listed in the provisos to clause (2) of the article but not specified in the proviso to clause (3) of the article.

2. Special Procedure:
- Certain amendments require a special procedure, which involves the consent of not less than half of the states.
- This special procedure applies to amendments that affect the federal structure of the Constitution or the powers and representation of states.
- The following types of amendments fall under the special procedure:
  - Amendments affecting the provisions of Article 54, Article 55, Article 73, Article 162, and Article 241, or provisions affecting the representation of states in Parliament, or provisions affecting the provisions of this article.
  - Amendments affecting the provisions of the Constitution relating to the distribution of legislative powers between the Union and the states.
  - Amendments affecting the representation of states in Parliament or the manner of election of the President or the manner of election of Vice-President.
  - Amendments affecting the extent of the executive power of the Union or of a state.
  - Amendments affecting the provisions of this article or of Article 81.

Amendment Procedure Steps:
1. The amendment bill is introduced in either House of Parliament.
2. The bill must be passed in each House by the majority of the total membership of that House and by a two-thirds majority of the members present and voting.
3. If the amendment seeks to make changes to federal provisions or affects the powers and representation of states, it must also be ratified by the legislatures of at least half of the states by a simple majority.
4. After being passed by both Houses of Parliament and ratified by the required number of state legislatures, the bill is presented to the President for assent.
5. The President gives his assent, and the amendment becomes part of the Constitution.

This amendment procedure ensures that changes to the Constitution are made with careful consideration and reflect the will of both the central government and the states, thus preserving the federal character of the Indian Constitution.`
      },
      {
        title: "3.2: Centre-State Relations",
        description: `The Indian Constitution establishes a federal system with a strong central government. The relationship between the Centre and States is defined through legislative, administrative, and financial provisions.

Start
↓
Centre-State Relations
↓
1. Legislative Relations (Articles 245-255)
• Union List: 100 subjects (Defense, Foreign Affairs)
• State List: 61 subjects (Police, Agriculture)
• Concurrent List: 52 subjects (Education, Forests)
↓
2. Administrative Relations (Articles 256-263)
• States must comply with central laws
• Centre can give directions to states
• All-India Services (IAS, IPS) serve both
↓
3. Financial Relations (Articles 268-293)
• Division of taxation powers
• Finance Commission recommendations
• Grants-in-aid to states
↓
4. Emergency Provisions
• National Emergency (Article 352)
• State Emergency/President's Rule (Article 356)
• Financial Emergency (Article 360)
↓
5. Inter-State Relations
• Inter-State Council
• Zonal Councils
• River Water Disputes
↓
End

The relationship between the central government and the state governments in India is governed by various elements outlined in the Constitution. These elements define the distribution of powers, responsibilities, and authority between the center and the states. Here's an elaboration on the key elements of the Centre-State relationship:

1. Legislative Relations:
- The Constitution divides legislative powers between the center and the states through the Union List, State List, and Concurrent List. The Union List includes subjects on which only Parliament can legislate, while the State List includes subjects on which only state legislatures can legislate. The Concurrent List includes subjects on which both the center and states can legislate, but the laws made by Parliament prevail in case of a conflict.

2. Administrative Relations:
- While the central government has administrative authority over matters within the Union List, state governments have administrative control over subjects in the State List. However, in Concurrent List subjects, both the center and the states have concurrent powers to administer and make laws. The administrative relationship involves cooperation, coordination, and consultation between the center and states for effective governance.

3. Financial Relations:
- Financial relations between the center and states are governed by provisions such as grants-in-aid, distribution of taxes, and fiscal transfers. The Finance Commission recommends the distribution of financial resources between the center and states, ensuring fiscal federalism and equitable distribution of funds.

4. Emergency Provisions:
- The Constitution provides for three types of emergencies: national emergency, state emergency (President's Rule), and financial emergency. During emergencies, the center can assume certain powers of the state governments, and the normal federal structure may be temporarily altered to ensure effective governance and national security.

5. Inter-State Relations:
- The Constitution provides for the resolution of disputes between states through mechanisms such as the Interstate Council and the Inter-State River Water Disputes Act. The center plays a crucial role in mediating disputes and maintaining harmony among states.

6. Role of Governor:
- The Governor is the constitutional head of the state and acts as a representative of the President at the state level. While the Governor's powers are extensive, they are exercised on the advice of the Council of Ministers headed by the Chief Minister. The Governor's role is crucial in maintaining constitutional balance and ensuring smooth functioning of the state government.

7. Constitutional Amendments:
- The Constitution provides for amendments to be made by Parliament. Certain amendments may affect the federal structure or the distribution of powers between the center and states. Amendments often require the consent of a majority of states or special procedures to maintain the federal balance.

8. Judicial Review:
- The judiciary plays a significant role in adjudicating disputes between the center and states or interpreting constitutional provisions related to the federal structure. The Supreme Court acts as the guardian of the Constitution and ensures that the division of powers between the center and states is maintained.

These elements collectively define the complex and dynamic relationship between the central government and the state governments in India, ensuring cooperative federalism and effective governance while preserving the unity and integrity of the nation.`
      },
      {
        title: "3.3: Purposes of Constitutional Amendments",
        description: `Constitutional amendments in India serve several key purposes that reflect the nation's evolving needs and aspirations:

Start
↓
Purposes of Constitutional Amendments
↓
1. Strengthening Democracy & Governance
• Improving Democratic Framework
• Enhancing Governance Structures
• Balancing Government Branches
↓
2. Enhancing Social Justice & Equality
• Addressing Historical Injustices
• Ensuring Equal Opportunities
• Protecting Underprivileged Sections
↓
3. Ensuring Cooperative Federalism
• Improving Centre-State Relations
• Strengthening Federal Structure
• Promoting State Autonomy
↓
4. Economic Reforms & Redistribution
• Economic Restructuring
• Resource Allocation
• Social Welfare Promotion
↓
5. Judicial & Legislative Reforms
• Ensuring Judicial Independence
• Improving Accountability
• Balancing Legislature-Judiciary Relations
↓
6. National Security & Emergency Measures
• Addressing Security Needs
• Emergency Response Framework
• Maintaining National Stability
↓
7. Promoting Inclusion & Representation
• Enhancing Political Representation
• Including Marginalized Groups
• Ensuring Democratic Participation
↓
End

Various amendments to the Constitution of India have been made over the years to address evolving socio-political realities, correct lacunae, and strengthen democratic governance. Here's an analysis of the purpose behind some significant constitutional amendments:

1. First Amendment Act, 1951:
- Purpose: This amendment was primarily aimed at addressing legal challenges to land reform laws and other social welfare measures introduced by various state governments. It sought to protect such laws from judicial scrutiny by amending the fundamental rights provisions related to freedom of speech and expression.
- Provisions: Introduced changes to protect land reform laws and impose restrictions on freedom of speech and expression.
- Significance: Addressed legal challenges to land reform laws and strengthened the state's ability to enact social welfare measures.

2. Seventh Amendment Act, 1956:
- Purpose: The amendment was enacted to reorganize states on linguistic lines, addressing demands for linguistic states for better governance and administration. It sought to promote linguistic and cultural homogeneity within states and facilitate effective governance by catering to the linguistic aspirations of different regions.
- Provisions: Reorganized states on a linguistic basis and amended provisions related to the representation of states in the Rajya Sabha.
- Significance: Facilitated linguistic reorganization of states, promoting linguistic and cultural homogeneity and effective governance.

3. Forty-Second Amendment Act, 1976:
- Purpose: This extensive amendment was introduced during the Emergency period and aimed at consolidating power in the hands of the central government. It sought to strengthen the executive authority of the central government, limit judicial review, and curb fundamental rights. Additionally, it introduced Fundamental Duties and made changes to the Preamble, reflecting a shift towards a more socialist and secular framework.
- Provisions: Introduced extensive changes, including Fundamental Duties, changes in the Preamble, and increased powers to the central government.
- Significance: Enacted during the Emergency period, aimed at consolidating power in the hands of the central government, limiting judicial review, and promoting a socialist and secular framework.

4. Forty-Fourth Amendment Act, 1978:
- Purpose: This amendment was introduced to rectify some of the excessive powers granted to the government during the Emergency period under the Forty-Second Amendment. It sought to restore certain constitutional provisions related to judicial review, fundamental rights, and the election process, ensuring a better balance of power between the different branches of government.
- Provisions: Restored certain constitutional provisions related to judicial review, fundamental rights, and the election process, rectifying excesses of the 42nd Amendment.
- Significance: Reversed some of the controversial changes introduced during the Emergency period, restoring balance and safeguards to democratic institutions.

5. Seventy-Third Amendment Act, 1992:
- Provisions: Provided for the establishment of Panchayats in rural areas and devolved powers and responsibilities to these institutions.
- Significance: Strengthened grassroots democracy by empowering local self-government institutions and promoting participatory governance in rural areas.

6. Seventy-Fourth Amendment Act, 1992:
- Provisions: Provided for the establishment of Municipalities in urban areas and devolved powers and responsibilities to these institutions.
- Significance: Strengthened urban governance by empowering local self-government institutions and promoting decentralized decision-making in urban areas.

7. Seventy-Sixth Amendment Act, 1994:
- Provisions: Added Article 16(4A), enabling the state to provide for reservation in promotion to Scheduled Castes and Scheduled Tribes in government jobs.
- Significance: Aimed at promoting social justice and ensuring representation of marginalized communities in government services.

8. Eighty-Sixth Amendment Act, 2002:
- Provisions: Inserted Article 21A, making education a fundamental right for children aged 6 to 14 years.
- Significance: Ensured universal access to elementary education and promoted the realization of the right to education.

9. Fifty-Second Amendment Act, 1985:
- Provisions: Placed the election of the President and Vice-President beyond the scope of judicial review.
- Significance: Strengthened the electoral process and enhanced the integrity and independence of the presidential election process.

10. Ninety-First Amendment Act, 2003:
- Provisions: Inserted provisions related to the creation of the National Commission for Scheduled Castes and the National Commission for Scheduled Tribes.
- Significance: Strengthened mechanisms for the protection and promotion of the rights and interests of Scheduled Castes and Scheduled Tribes.

11. Ninety-Third Amendment Act, 2005:
- Purpose: This amendment was introduced to address issues related to reservation in educational institutions. It sought to provide for reservation of seats in private educational institutions, including unaided minority institutions, for socially and educationally backward classes, thereby promoting social justice and inclusivity in education.

12. One Hundred and First Amendment Act, 2016:
- Purpose: This landmark amendment introduced the Goods and Services Tax (GST) regime, aiming to streamline the indirect tax structure in India and create a unified national market. It sought to simplify tax administration, reduce tax evasion, and promote ease of doing business by replacing multiple indirect taxes with a single GST.

13. One Hundred and Second Amendment Act, 2018:
- Provisions: Introduced changes related to the National Commission for Backward Classes and conferred constitutional status to the Commission.
- Significance: Strengthened mechanisms for the identification and protection of the interests of backward classes in India.

These amendments illustrate the diverse purposes behind constitutional amendments, ranging from addressing socio-economic inequalities to strengthening democratic institutions and responding to changing governance needs. While some amendments aimed to expand individual rights and freedoms, others focused on redefining the balance of power between the center and states or introducing structural reforms to promote national development and unity. Each amendment reflects the evolving aspirations and challenges of Indian society and governance, highlighting the dynamic nature of the constitutional framework.

The evolution of the Constitution through these amendments demonstrates India's commitment to:
• Responsive governance
• Social justice
• Federal harmony
• Economic development
• National security
• Inclusive democracy

This adaptive approach has helped India address changing societal needs while maintaining the basic structure of the Constitution.`
      }
    ]
  },
  {
    title: "Unit 4: Centre-State Relations",
    content: [
      {
        title: "4.1: Electoral Rights and Electoral Process",
        description: `Electoral rights are fundamental to the functioning of any democratic system, as they ensure that citizens have the power to participate in choosing their representatives and shaping the policies of their government. In India, electoral rights are an integral part of the democratic process and are protected by the Constitution. These rights not only empower individuals but also play a crucial role in maintaining the legitimacy, accountability, and inclusiveness of the political system.

Start
↓
Importance of Electoral Rights
↓
Four Core Pillars
↓
Foundation of Democracy → Political Participation → Accountability of Government → Safeguard of Rights
↓
Expression of Public Will and Equality
↓
Peaceful Change of Government
↓
Representation of Diverse Groups
↓
Strengthening Rule of Law
↓
Protection Against Authoritarianism
↓
End

Electoral Rights:

1. Right to Vote: Every citizen of India who is above the age of 18 has the right to vote in elections to elect their representatives to the Lok Sabha (House of the People) and state legislative assemblies. This right is guaranteed by Article 326 of the Constitution.

2. Universal Adult Suffrage: India practices universal adult suffrage, which means that all citizens who meet the age requirement have the right to vote without any discrimination based on caste, religion, gender, or economic status.

3. Right to Contest Elections: Eligible citizens also have the right to contest elections to become members of Parliament, state legislative assemblies, and local bodies such as municipal corporations, panchayats, and municipal councils.

4. Right to Information: Citizens have the right to access information related to the electoral process, including voter lists, election schedules, candidate details, and election results.

5. Right to Free and Fair Elections: Citizens have the right to participate in free and fair elections, where their votes are counted accurately and impartially, and where there is no coercion or undue influence.

Electoral Process of Registration:

1. Voter Registration: The first step in the electoral process is voter registration. Eligible citizens must enroll themselves as voters in the electoral roll (voter list) of their respective constituencies.

2. Election Commission of India (ECI): The Election Commission of India is the constitutional body responsible for conducting elections in the country. It oversees the voter registration process and ensures the integrity and fairness of elections.

3. Form Submission: Citizens can apply for voter registration by submitting Form 6 to the Electoral Registration Officer (ERO) of their constituency. Form 6 is available online on the ECI's website and can also be submitted offline at designated locations.

4. Verification Process: After receiving the voter registration application, the ERO verifies the details provided by the applicant and conducts field verification, if necessary, to ensure the applicant's eligibility.

5. Inclusion in Electoral Roll: Once the verification process is complete and the applicant's eligibility is confirmed, their name is included in the electoral roll of the constituency, and a Voter ID card is issued to them.

6. Continuous Updating: The electoral roll is continuously updated to include new voters, remove ineligible voters (due to death or relocation), and update changes in voters' details such as address or name.

7. Electoral Photo Identity Card (EPIC): The Voter ID card, also known as the Electoral Photo Identity Card (EPIC), serves as proof of identity and eligibility to vote. It is issued by the ECI to registered voters.

The electoral process of registration ensures that eligible citizens are provided with the opportunity to exercise their electoral rights by participating in the democratic process through voting. It is a crucial aspect of democratic governance and ensures the representation of the will of the people in the decision-making process.

The Electoral Process:

The electoral process in India is a systematic and well-organized procedure that ensures fair and transparent elections. It involves multiple stages and stakeholders, all working together to uphold democratic principles and ensure that the will of the people is accurately reflected in the selection of their representatives.

Start
↓
Electoral Process Stages
↓
Pre-Election Phase
↓
Announcement → Voter Registration → Nomination → Campaign
↓
Election Day Operations
↓
Polling → Security → Vote Counting
↓
Post-Election Activities
↓
Results Declaration → Government Formation
↓
End

The electoral process in India consists of several stages:

1. Pre-Election Phase:
   - Announcement of Elections: The Election Commission of India announces the election schedule, including nomination dates, campaigning period, and polling dates.
   - Voter Registration: As described above, eligible citizens register to vote.
   - Nomination of Candidates: Political parties and independent candidates file nomination papers with the returning officer.
   - Scrutiny of Nominations: The returning officer examines nomination papers to ensure they meet all requirements.
   - Withdrawal of Candidature: Candidates can withdraw their nominations within a specified period.
   - Campaign Period: Candidates and political parties campaign to seek votes from the electorate.

2. Election Day Operations:
   - Polling: Voters cast their votes at designated polling stations using Electronic Voting Machines (EVMs) or ballot papers.
   - Security Arrangements: Security personnel are deployed to ensure peaceful and orderly polling.
   - Voter Identification: Voters present their identification documents to polling officials for verification.
   - Casting of Votes: Voters press the button on the EVM corresponding to their chosen candidate or mark the ballot paper.
   - Vote Counting: After polling concludes, votes are counted under strict supervision.

3. Post-Election Activities:
   - Declaration of Results: The Election Commission announces the results after counting is complete.
   - Government Formation: The winning party or coalition forms the government.
   - Oath-Taking Ceremony: Elected representatives take an oath of office.

The electoral process in India is designed to be inclusive, transparent, and fair, ensuring that every eligible citizen has the opportunity to participate in the democratic process and that the will of the people is accurately reflected in the selection of their representatives.`
      },
      {
        title: "4.2: Ethical Electoral Participation",
        description: `Ethical electoral participation is crucial for ensuring the integrity, fairness, and effectiveness of the democratic process. Here's why it is significant:

Start
↓
Ethical Electoral Participation
↓
Core Principles
↓
Integrity → Transparency → Accountability → Responsibility
↓
Democratic Values
↓
Fair Elections → Equal Participation → Informed Choices
↓
Positive Outcomes
↓
Strong Democracy → Social Trust → Good Governance
↓
End

Ethical electoral participation refers to the engagement of citizens, political parties, candidates, and other stakeholders in the electoral process in a manner that upholds democratic values, principles, and integrity. It involves conducting oneself with honesty, integrity, fairness, and respect for the rule of law throughout all stages of the electoral process. Here are some key aspects of ethical electoral participation:

1. Respect for Democratic Principles: Ethical electoral participation entails a commitment to democratic principles such as free and fair elections, respect for human rights, rule of law, and accountability. Citizens and stakeholders should uphold these principles in their actions and behaviors during elections.

2. Transparency and Accountability: Ethical participation requires transparency in electoral processes, including voter registration, candidate nomination, campaigning, polling, and counting of votes. Political parties, candidates, and election officials should operate transparently and be accountable to the electorate and regulatory authorities.

3. Fair Campaigning: Ethical electoral participation entails conducting election campaigns in a fair and respectful manner. Political parties and candidates should refrain from using hate speech, spreading false information, engaging in personal attacks, or resorting to violence to gain electoral advantage.

4. Respect for Electoral Laws: Ethical participation involves adhering to electoral laws, rules, and regulations established by the Election Commission or other relevant authorities. This includes compliance with campaign finance regulations, restrictions on campaigning activities, and electoral code of conduct.

5. Avoidance of Electoral Malpractices: Ethical participation requires refraining from engaging in electoral malpractices such as bribery, corruption, voter intimidation, electoral fraud, vote-buying, or misuse of state resources for electoral gain. Such practices undermine the integrity of the electoral process and erode public trust in democracy.

6. Promotion of Inclusivity and Diversity: Ethical electoral participation involves promoting inclusivity and diversity in the electoral process by ensuring equal participation and representation of all eligible voters, regardless of their social, economic, religious, or cultural backgrounds.

7. Respect for Electoral Outcomes: Ethical participation requires respecting the outcome of elections, whether one's preferred candidate or party wins or loses. Acceptance of election results is essential for maintaining political stability, fostering national unity, and upholding the legitimacy of democratic institutions.

8. Civic Education and Awareness: Ethical participation is facilitated through civic education and awareness programs that educate citizens about their rights and responsibilities in the electoral process. Such initiatives promote informed and conscientious voting decisions and discourage unethical practices.

9. Civil Society Oversight: Civil society organizations, media, and other watchdogs play a crucial role in monitoring electoral processes, exposing irregularities, and holding stakeholders accountable for unethical behavior. Their oversight helps ensure transparency, fairness, and integrity in elections.

10. Commitment to Electoral Reform: Ethical participation requires a commitment to continuous improvement of electoral laws, procedures, and institutions to address emerging challenges, enhance transparency, and strengthen democratic governance.

Overall, ethical electoral participation is essential for fostering trust in democratic institutions, safeguarding the integrity of elections, and promoting inclusive and accountable governance. It requires a collective effort from all stakeholders to uphold democratic values and principles in the electoral process.`
      },
      {
        title: "4.3: Motivation and Facilitation for Electoral Participation",
        description: `Motivation and facilitation for electoral participation are essential to encourage citizens to engage in the democratic process and exercise their voting rights. Various strategies can be implemented to increase voter turnout and ensure inclusive participation.

Start
↓
Motivation and Facilitation Strategies
↓
Education and Awareness
↓
Civic Education → Accessible Information → Voter Education Workshops
↓
Registration Initiatives
↓
Voter Registration Drives → Inclusive Registration → Mobile Units
↓
Accessibility Measures
↓
Early Voting Options → Voter Assistance → Accessible Polling Stations
↓
Community Engagement
↓
Local Leaders → Public Campaigns → Recognition Programs
↓
End

Motivation and facilitation for electoral participation are essential to encourage citizens to engage in the democratic process and exercise their voting rights. Here are several strategies to motivate and facilitate electoral participation:

1. Civic Education and Awareness: Provide civic education programs that inform citizens about the importance of voting, their rights and responsibilities as voters, and the significance of participating in the electoral process. Raise awareness about the impact of elections on governance and society.

2. Accessible Information: Make information about the electoral process, including voter registration procedures, polling locations, candidate profiles, and election schedules, readily accessible and easy to understand. Utilize various communication channels such as websites, social media, posters, and pamphlets.

3. Voter Registration Drives: Organize voter registration drives to ensure that eligible citizens are registered to vote. Collaborate with community organizations, schools, colleges, workplaces, and government agencies to reach out to potential voters and facilitate the registration process.

4. Inclusive Voter Registration: Ensure inclusivity in voter registration efforts by reaching out to marginalized and underrepresented communities, including minorities, women, youth, persons with disabilities, and socio-economically disadvantaged groups. Address barriers to registration such as lack of documentation or transportation.

5. Mobile Registration Units: Deploy mobile registration units to remote or underserved areas to facilitate voter registration for residents who may face difficulty accessing registration centers. Bring registration services directly to the community to enhance convenience and accessibility.

6. Voter Education Workshops: Conduct voter education workshops and outreach programs to educate citizens about the electoral process, voting procedures, and the significance of their participation. Empower voters with knowledge and resources to make informed decisions at the polls.

7. Public Awareness Campaigns: Launch public awareness campaigns using mass media, including television, radio, newspapers, and social media platforms, to promote voter participation. Highlight the importance of voting as a civic duty and encourage citizens to exercise their democratic rights.

8. Community Engagement: Engage local community leaders, organizations, and influencers to promote voter turnout and civic engagement within their respective communities. Mobilize grassroots networks to encourage voter participation and foster a culture of civic responsibility.

9. Early Voting Options: Offer early voting options, such as absentee voting, postal voting, or extended polling hours, to accommodate voters who may face scheduling conflicts or transportation challenges on Election Day. Provide flexibility and convenience to encourage broader participation.

10. Voter Assistance Services: Provide voter assistance services at polling stations to assist voters with disabilities, elderly citizens, or those who require language assistance. Ensure that polling stations are accessible and equipped with necessary facilities to accommodate all voters.

11. Recognition and Incentives: Recognize and incentivize voter participation through awards, certificates, or community recognition programs. Highlight the contributions of active voters in strengthening democracy and civic engagement.

12. Feedback Mechanisms: Establish feedback mechanisms to solicit input from voters about their experiences during the electoral process. Use feedback to identify areas for improvement and address concerns to enhance voter satisfaction and confidence in the electoral system.

By implementing these strategies, governments, electoral authorities, civil society organizations, and community leaders can motivate and facilitate electoral participation, ensuring that citizens are empowered to exercise their democratic rights and contribute to the democratic process.`
      },
      {
        title: "4.4: Voter Awareness and Electoral Participation",
        description: `A well-informed voter is the foundation of a strong democracy. Voter awareness and electoral participation involve educating citizens about their rights, responsibilities, and the voting process to ensure an engaged and empowered electorate.

Start
↓
Voter Awareness Components
↓
Understanding Electoral Process → Rights & Responsibilities → Empowered Voter Characteristics
↓
Voter Awareness Initiatives
↓
Civic Education → Information Campaigns → Registration Drives → Community Outreach
↓
Voting Procedures
↓
Verification → Casting Vote → Vote Counting → Results Declaration
↓
Ethical Guidelines
↓
Prohibited Practices → Fair Electoral Conduct → Active Participation
↓
End

A well-informed voter is the foundation of a strong democracy. Voter awareness and electoral participation involve educating citizens about their rights, responsibilities, and the voting process to ensure an engaged and empowered electorate. This section outlines key aspects of voter awareness, the electoral process, and the characteristics of an empowered voter.

Understanding the Electoral Process:

The electoral process encompasses various steps designed to ensure fair, transparent, and democratic elections. It includes voter registration, polling procedures, and result declarations. Key components include:

• Voter Registration: Eligible citizens must register with electoral authorities before voting. Required documents and deadlines are specified by election commissions.

• Polling Stations: Voters cast their votes at designated polling stations, equipped with ballots, electronic voting machines (EVMs), and electoral officials.

• Verification of Identity: Voters must present government-approved identification to verify their registration before proceeding to vote.

• Casting a Vote: Voters mark their choice on a ballot paper or EVM in a confidential manner to maintain secrecy.

• Vote Counting and Results: After polling, votes are counted under supervision, and results are officially declared by the electoral commission.

Rights and Responsibilities of Voters:

Voters have essential rights and responsibilities to uphold the integrity of the democratic process.

• Rights:
  o Right to vote freely and fairly.
  o Right to access unbiased election information.
  o Right to secrecy while voting.

• Responsibilities:
  o Register to vote within deadlines.
  o Verify personal information on electoral rolls.
  o Participate in elections responsibly and ethically.

Empowered Voter Characteristics:

A prospective empowered voter is informed, critical, and actively engaged in the democratic process. Essential characteristics include:

• Informed Decision-Making: Understanding election procedures, political parties, and candidate policies through reliable sources.

• Critical Thinking: Analyzing campaign messages and media coverage objectively to discern facts from misinformation.

• Civic Engagement: Participating beyond elections, such as attending community meetings and advocacy efforts.

• Ethical Conduct: Respecting diverse opinions, discouraging electoral malpractices, and ensuring fair participation.

• Encouraging Others: Promoting voter awareness and registration among peers.

• Advocacy for Electoral Reform: Supporting transparent election processes, voter education, and inclusive participation.

• Continuous Learning: Staying updated on electoral laws and political developments.

Voter Awareness Initiatives:

To increase voter participation and engagement, various strategies can be employed:

• Civic Education Programs: Conducted in schools, colleges, and community centers to educate young voters on democracy and civic duties.

• Information Campaigns: Utilizing mass media and social platforms to spread awareness about elections, deadlines, and procedures.

• Voter Registration Drives: Organizing registration booths at public spaces for easy voter enrollment.

• Community Outreach: Partnering with local leaders and volunteers to distribute voter information.

• Helplines and Digital Tools: Offering accessible platforms for voter queries and election updates.

• Youth Engagement: Encouraging young voters through mock elections, debates, and civic programs.

• Public Service Announcements: Using influential figures and social media to encourage voter participation.

Voting Procedures and Ethical Guidelines:

The voting process ensures fairness and security, adhering to ethical guidelines:

• Prohibited Practices: Voter intimidation, bribery, misinformation, and electoral fraud are strictly prohibited.

• Fair Electoral Conduct: Candidates, parties, and officials must uphold transparency and integrity.

• Encouraging Active Participation: Voters are urged to research candidates, study ballot measures, and vote in alignment with their values.

By fostering voter awareness and empowerment, electoral authorities, governments, and civil society organizations can strengthen democracy, promote informed voting, and ensure a fair and transparent electoral system.`
      }
    ]
  },
  {
    title: "Articles",
    content: [
      {
        title: "Part I: The Union and Its Territory (Articles 1-4)",
        description: `🔷 Flowchart Summary:

Start
↓
Article 1: India as a Union of States
• India is a "Union of States" (not federation)
• States cannot break away from India
• Includes states, union territories, and acquired territories
↓
Article 2: Admission of New States
• Parliament can add new states
• Example: Sikkim (1975), Goa (1987)
↓
Article 3: Formation and Changes in States
• Parliament can create, merge, divide, rename states
• Example: Telangana created in 2014
↓
End

📚 Detailed Explanation:

The first part of the Constitution defines India's territorial structure and federal nature. Article 1 establishes India as a 'Union of States', deliberately choosing the word 'Union' over 'Federation' to emphasize the indestructible nature of India's unity. This means states cannot secede from the Union.

The territory of India comprises:
1. States (28 currently)
2. Union Territories (8 currently)
3. Territories that may be acquired

Article 2 gives Parliament the power to admit or establish new states. This power has been exercised several times, such as:
- Admission of Sikkim in 1975
- Creation of Goa as a state in 1987
- Formation of Telangana in 2014

Article 3 is crucial as it allows Parliament to:
- Form new states
- Alter areas of existing states
- Change state boundaries
- Change state names

This power requires:
- Presidential recommendation
- Views of affected state legislature
- Simple majority in Parliament

Key Points to Remember:
• India is an indestructible union of destructible states
• Parliament has supreme power in state formation
• States have no right to secede
• Territory can be added through acquisition`
      },
      {
        title: "Part II: Citizenship (Articles 5-11)",
        description: `🔷 Flowchart Summary:

Start
↓
Article 5: Original Citizens (1950)
• Born in India
• Living for 5 years before 26 January 1950
↓
Article 6: Migrants from Pakistan
• Before 19 July 1948: Automatic citizenship
• After this date: Must apply
↓
Article 11: Parliament's Power
• Can make/change citizenship laws
• Example: Citizenship Act, 1955
↓
End

📚 Detailed Explanation:

Part II of the Constitution deals with citizenship provisions, defining who qualified as an Indian citizen when the Constitution came into effect and empowering Parliament to regulate future citizenship.

Types of Original Citizenship:
1. By Domicile (Article 5):
   - Born in India
   - Either parent born in India
   - Ordinary resident for 5 years

2. For Migrants from Pakistan (Article 6):
   - Came to India before July 19, 1948: Automatic citizenship
   - Came after: Registration required
   - Must have resided for 6 months

3. For Migrants to Pakistan (Article 7):
   - Those who migrated but returned under permits
   - Special registration process required

4. Persons of Indian Origin Abroad (Article 8):
   - Registration at Indian consulates
   - For those or their parents/grandparents born in India

Current Citizenship Acquisition Methods (Citizenship Act, 1955):
1. By Birth (Section 3)
2. By Descent (Section 4)
3. By Registration (Section 5)
4. By Naturalization (Section 6)
5. By Incorporation of Territory (Section 7)

Important Points:
• India follows single citizenship
• No state citizenship
• Parliament has exclusive power over citizenship
• Citizenship can be revoked under certain conditions`
      },
      {
        title: "Part III: Fundamental Rights (Articles 12-35)",
        description: `🔷 Flowchart Summary:

Start
↓
Article 14: Right to Equality
• Equal before law
• No discrimination based on religion, race, caste, gender
↓
Article 19: Six Freedoms
• Speech and Expression
• Assembly without arms
• Form associations
• Move throughout India
• Reside anywhere in India
• Practice any profession
↓
Article 21: Right to Life
• Life and personal liberty protected
• Includes privacy, clean environment, dignity
↓
Article 32: Constitutional Remedies
• Direct access to Supreme Court
• "Heart and soul" of Constitution
↓
End

📚 Detailed Explanation:

Fundamental Rights are the basic human rights enshrined in the Constitution which apply to all citizens. They are justiciable, meaning courts can enforce them.

Six Categories of Fundamental Rights:

1. Right to Equality (Articles 14-18):
   - Equality before law (Article 14)
   - Prohibition of discrimination (Article 15)
   - Equal opportunity in public employment (Article 16)
   - Abolition of untouchability (Article 17)
   - Abolition of titles (Article 18)

2. Right to Freedom (Articles 19-22):
   - Six fundamental freedoms (Article 19)
   - Protection in respect of conviction (Article 20)
   - Right to life and personal liberty (Article 21)
   - Protection against arrest and detention (Article 22)

3. Right Against Exploitation (Articles 23-24):
   - Prohibition of human trafficking
   - Prohibition of child labor

4. Right to Freedom of Religion (Articles 25-28):
   - Freedom to practice religion
   - Freedom to manage religious affairs
   - Freedom from religious taxation

5. Cultural and Educational Rights (Articles 29-30):
   - Protection of minorities
   - Right to establish educational institutions

6. Right to Constitutional Remedies (Article 32):
   - Supreme Court's writ jurisdiction
   - Types of writs: Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo Warranto

Restrictions on Fundamental Rights:
• Reasonable restrictions can be imposed
• During emergency, some rights can be suspended
• Parliament can amend fundamental rights
• Must not violate basic structure

Important Supreme Court Judgments:
• Kesavananda Bharati Case (1973): Basic Structure doctrine
• Maneka Gandhi Case (1978): Expanded scope of Article 21
• Vishaka Case (1997): Sexual harassment guidelines
• Puttaswamy Case (2017): Right to privacy`
      },
      {
        title: "Part IV: Directive Principles (Articles 36-51)",
        description: `🔷 Flowchart Summary:

Start
↓
Article 39: Key Principles
• Equal justice and free legal aid
• Equal pay for equal work
• Protection of children and workers
↓
Article 44: Uniform Civil Code
• Common civil law for all citizens
• Currently under discussion
↓
Article 45: Early Childhood Care
• Free education until age 14
• Now a Fundamental Right (Article 21A)
↓
Article 48A: Environment Protection
• Protect and improve environment
• Safeguard forests and wildlife
↓
End

📚 Detailed Explanation:

Directive Principles of State Policy (DPSP) are guidelines to the central and state governments for establishing a just society. Though not enforceable by courts, they are fundamental in governance.

Classification of DPSPs:

1. Socialistic Principles:
   - Equal distribution of resources
   - Prevention of concentration of wealth
   - Equal pay for equal work
   - Workers' welfare

2. Gandhian Principles:
   - Village Panchayats
   - Cottage industries
   - Rural development
   - Prohibition of alcohol
   - Protection of cows

3. Liberal-Intellectual Principles:
   - Uniform Civil Code
   - Separation of judiciary
   - International peace
   - Protection of monuments

Key Articles:
• Article 39: Six principles of policy
• Article 40: Village Panchayats
• Article 44: Uniform Civil Code
• Article 45: Early childhood care
• Article 48A: Environmental protection
• Article 50: Separation of judiciary

Implementation Status:
- Many principles implemented through laws
- Some converted to Fundamental Rights
- Others remain as guidelines
- Regular policy initiatives based on DPSPs`
      },
      {
        title: "Part V: The Union (Articles 52-151)",
        description: `🔷 Flowchart Summary:

Start
↓
The President (Articles 52-62)
• Supreme Commander
• First Citizen
• Executive Head
↓
Vice-President (Articles 63-73)
• Chairs Rajya Sabha
• Acts as President when needed
↓
Prime Minister (Articles 74-75)
• Real Executive Head
• Leads Council of Ministers
↓
Parliament (Articles 79-122)
• Lok Sabha
• Rajya Sabha
• Legislative Powers
↓
End

📚 Detailed Explanation:

Part V deals with the Union Government's structure and functions. It establishes a parliamentary form of government with a nominal head (President) and a real head (Prime Minister).

The President:
1. Election:
   - Electoral college system
   - State and national legislators vote
   - Proportional representation

2. Powers:
   - Executive: Appoints PM, ministers, governors
   - Legislative: Summons Parliament, signs bills
   - Judicial: Pardons, commutes sentences
   - Emergency: National, state, financial

The Prime Minister:
1. Appointment:
   - Leader of majority party
   - Appointed by President
   - Must have Parliament's confidence

2. Functions:
   - Heads Council of Ministers
   - Chief advisor to President
   - Leader of Parliament
   - Chief coordinator of policies

Parliament:
1. Lok Sabha:
   - Direct election
   - Maximum 545 members
   - 5-year term

2. Rajya Sabha:
   - Indirect election
   - 250 members maximum
   - Permanent house, partial renewal

3. Functions:
   - Law-making
   - Budget approval
   - Executive control
   - Constitutional amendments`
      },
      {
        title: "Part VI: The States (Articles 152-237)",
        description: `🔷 Flowchart Summary:

Start
↓
Governor (Articles 153-162)
• State's Constitutional Head
• Appointed by President
↓
Chief Minister (Articles 163-164)
• Real Executive Head of State
• Leads State Council of Ministers
↓
State Legislature (Articles 168-212)
• Makes state laws
• Controls state finances
↓
End

📚 Detailed Explanation:

Part VI mirrors the Union structure at the state level, establishing a parliamentary system in states.

State Executive:

1. Governor:
   - Appointed by President
   - 5-year term
   - Constitutional head
   - Powers similar to President at state level

2. Chief Minister:
   - Real executive head
   - Leader of majority party
   - Appointed by Governor
   - Heads Council of Ministers

State Legislature:

1. Types:
   - Unicameral (Legislative Assembly)
   - Bicameral (+ Legislative Council)

2. Legislative Assembly:
   - Directly elected members
   - 5-year term
   - Maximum 500 members

3. Legislative Council:
   - Partly elected, partly nominated
   - Permanent house
   - 1/3rd of Assembly size

Key Functions:
• State law-making
• Budget control
• Executive oversight
• Local administration`
      },
      {
        title: "Part VII-VIII: Union Territories & Special Areas",
        description: `🔷 Flowchart Summary:

Start
↓
Union Territories
• Administered by President
• Lt. Governor as Administrator
↓
Special Areas
• Scheduled Areas
• Tribal Areas
• Autonomous Districts
↓
End

📚 Detailed Explanation:

Parts VII and VIII deal with the administration of Union Territories and special areas that require unique governance arrangements.

Union Territories:
1. Administration:
   - Directly under President
   - Lieutenant Governor as administrator
   - Parliament makes laws
   - Some have assemblies (Delhi, Puducherry)

2. Special Features:
   - Centralized control
   - Flexible administration
   - Special development focus
   - Different from states

Special Areas:

1. Scheduled Areas (Fifth Schedule):
   - Tribal majority areas
   - Special protection
   - Governor's special powers
   - Tribal Advisory Council

2. Tribal Areas (Sixth Schedule):
   - Northeastern states
   - Autonomous District Councils
   - Traditional laws respected
   - Cultural protection

Key Provisions:
• Special development programs
• Protection of tribal rights
• Customary laws recognized
• Autonomous administration`
      },
      {
        title: "Part IX: Panchayats & Municipalities",
        description: `🔷 Flowchart Summary:

Start
↓
Panchayati Raj (243-243O)
• Three-tier system
• Regular elections
• Reserved seats for SC/ST/Women
↓
Municipalities (243P-243ZG)
• Urban local bodies
• Municipal corporations
• Town planning
↓
End

📚 Detailed Explanation:

Part IX, added by the 73rd and 74th Amendments (1992), establishes local self-government institutions.

Panchayati Raj System:

1. Structure:
   - Gram Panchayat (Village)
   - Panchayat Samiti (Block)
   - Zilla Parishad (District)

2. Key Features:
   - Regular elections
   - 5-year term
   - State Election Commission
   - Reserved seats for SC/ST/Women
   - Financial Commission

Municipal Bodies:

1. Types:
   - Municipal Corporations (large cities)
   - Municipal Councils (smaller cities)
   - Nagar Panchayats (transitional areas)

2. Functions:
   - Urban planning
   - Public health
   - Waste management
   - Local infrastructure

Common Features:
• Direct elections
• Reserved seats
• Fixed tenure
• Independent finance`
      },
      {
        title: "Part X-XI: Scheduled Areas & Relations",
        description: `🔷 Flowchart Summary:

Start
↓
Scheduled & Tribal Areas
• Special administration
• Protect tribal rights
↓
Centre-State Relations
• Legislative relations
• Administrative relations
• Financial relations
↓
End

📚 Detailed Explanation:

These parts deal with special administrative arrangements and the relationship between Centre and States.

Centre-State Relations:

1. Legislative Relations:
   - Union List (97 subjects)
   - State List (66 subjects)
   - Concurrent List (47 subjects)
   - Residuary powers with Centre

2. Administrative Relations:
   - Federal cooperation
   - Centre's directions to states
   - Inter-state coordination
   - Public Services

3. Financial Relations:
   - Tax distribution
   - Grants-in-aid
   - Finance Commission
   - Planning process

Special Provisions:
• Article 356: President's Rule
• Article 352: National Emergency
• Article 360: Financial Emergency
• Inter-State Council`
      },
      {
        title: "Part XII: Finance & Property",
        description: `🔷 Flowchart Summary:

Start
↓
Finance Commission (Article 280)
• Distribution of taxes
• Grants-in-aid
↓
Taxes & Funds
• Union taxes
• State taxes
• Consolidated funds
↓
Property Rights (Article 300A)
• No longer fundamental right
• Legal right since 1978
↓
End

📚 Detailed Explanation:

Part XII deals with financial matters between Centre and States.

Financial Provisions:

1. Distribution of Revenue:
   - Taxes levied by Centre
   - Taxes collected and shared
   - State taxes
   - Local body finances

2. Funds:
   - Consolidated Fund of India
   - Contingency Fund
   - Public Account
   - State funds

3. Finance Commission:
   - Constituted every 5 years
   - Tax sharing formula
   - Grants-in-aid
   - Financial recommendations

Property Rights:
• Moved from Fundamental Rights
• Now a constitutional right
• Compensation for acquisition
• State's power to acquire`
      },
      {
        title: "Part XIII-XIV: Trade & Services",
        description: `🔷 Flowchart Summary:

Start
↓
Trade & Commerce
• Free trade within India
• Restrictions if necessary
↓
Civil Services
• All India Services
• State Services
• Union Public Service Commission
↓
End

📚 Detailed Explanation:

These parts deal with trade regulations and civil services.

Trade & Commerce:

1. Freedom of Trade:
   - Throughout Indian territory
   - No internal barriers
   - Common market
   - State restrictions allowed

2. Restrictions:
   - Public interest
   - Essential commodities
   - Quality standards
   - Market regulation

Civil Services:

1. All India Services:
   - IAS (Administration)
   - IPS (Police)
   - IFS (Forest)

2. Central Services:
   - Group A, B, C, D
   - Specialized services
   - Technical posts

3. Recruitment:
   - UPSC conducts exams
   - Merit-based selection
   - Reserved categories
   - Professional training`
      },
      {
        title: "Part XV: Elections & Emergency",
        description: `🔷 Flowchart Summary:

Start
↓
Election Commission (Article 324)
• Conducts all major elections
• Ensures free & fair process
↓
Emergency Provisions
• National Emergency
• State Emergency
• Financial Emergency
↓
End

📚 Detailed Explanation:

Part XV covers electoral machinery and emergency provisions.

Election Commission:

1. Structure:
   - Chief Election Commissioner
   - Election Commissioners
   - Independent body

2. Functions:
   - Conduct elections
   - Prepare electoral rolls
   - Recognize parties
   - Assign symbols

3. Powers:
   - Superintendence
   - Direction
   - Control of elections

Emergency Provisions:

1. National Emergency (Article 352):
   - External aggression
   - Armed rebellion
   - War
   - Fundamental rights restricted

2. State Emergency (Article 356):
   - Constitutional breakdown
   - President's rule
   - Six months duration
   - Parliamentary approval needed

3. Financial Emergency (Article 360):
   - Economic stability threatened
   - Financial propriety
   - Directions to states
   - Salary reduction

Key Features:
• Independent election body
• Universal adult franchise
• Free and fair elections
• Emergency safeguards

💡 Tips for Understanding:
• Focus on structure and hierarchy
• Connect with current events
• Understand relationships between parts
• Remember key articles through examples`
      }
    ]
  },
  {
    title: "Amendments",
    content: [
      {
        title: "1st Amendment (1951)",
        description: `Start
↓
1st Amendment (1951)
↓
Key Changes:
• Added 9th Schedule → Protected Land Reform Laws
• Modified Article 19 → Reasonable Speech Restrictions
• Amended Article 15 → Special Provisions for Backward Classes
↓
Impact:
• Strengthened Social Reform
• Protected Land Reforms
• Balanced Rights with Restrictions
↓
End

The 1st Amendment was enacted to address early challenges in implementing the Constitution. It added the Ninth Schedule to protect land reform laws from judicial review. The amendment also imposed reasonable restrictions on freedom of speech and expression to prevent abuse. It enabled the state to make special provisions for the advancement of socially and educationally backward classes. This amendment was crucial in establishing the state's power to implement social reform while balancing individual rights. It set a precedent for future constitutional amendments and showed the Constitution's adaptability to social needs.`
      },
      {
        title: "7th Amendment (1956)",
        description: `Start
↓
7th Amendment (1956)
↓
Major Changes:
• State Reorganization → Linguistic Basis
• Abolished State Categories → Uniform System
• Administrative Reforms → Streamlined Processes
↓
Outcomes:
• Better Regional Governance
• Linguistic Harmony
• Improved Administration
↓
End

The 7th Amendment reorganized states on a linguistic basis, fundamentally changing India's federal structure. It abolished the previous classification of states into A, B, C, and D categories, creating a more uniform system. The amendment streamlined administrative processes and recognized the importance of language in state identity. It helped resolve regional tensions and promoted better governance through linguistic harmony. This amendment was vital in shaping modern India's federal structure and administrative framework.`
      },
      {
        title: "42nd Amendment (1976)",
        description: `Start
↓
42nd Amendment (1976)
↓
Constitutional Changes:
• Added 'Socialist' & 'Secular' → Preamble
• Introduced Fundamental Duties
• Enhanced Parliament's Powers
↓
Impact on Rights:
• DPSP Priority over Fundamental Rights
• Extended Emergency Powers
• Changed Basic Structure
↓
End

Known as the "Mini-Constitution," this amendment made sweeping changes during the Emergency period. It added 'Socialist' and 'Secular' to the Preamble and introduced Fundamental Duties. The amendment gave precedence to Directive Principles over Fundamental Rights and expanded Parliament's power to amend the Constitution. It significantly altered the basic framework of the Constitution, though some changes were later reversed. This amendment represents one of the most comprehensive revisions of the Constitution, reflecting the political climate of the time.`
      },
      {
        title: "44th Amendment (1978)",
        description: `Start
↓
44th Amendment (1978)
↓
Democratic Restoration:
• Reversed 42nd Amendment Effects
• Modified Emergency Provisions
• Changed Property Rights Status
↓
Key Outcomes:
• Restored Democratic Safeguards
• Balanced Constitutional Powers
• Protected Civil Liberties
↓
End

This amendment was enacted to restore the Constitution's democratic character after the Emergency. It removed the supremacy of Directive Principles over Fundamental Rights established by the 42nd Amendment. The amendment changed the Right to Property from a Fundamental Right to a legal right. It also modified emergency provisions to prevent their misuse and restored several democratic safeguards. This amendment was crucial in reestablishing the balance between different parts of the Constitution.`
      },
      {
        title: "73rd and 74th Amendments (1992)",
        description: `Start
↓
73rd & 74th Amendments (1992)
↓
Local Governance Structure:
• Panchayati Raj System → Rural
• Municipal System → Urban
↓
Key Features:
• Regular Elections
• Reserved Seats (SC/ST/Women)
• Financial Powers
↓
Implementation:
• Three-Tier System
• State Election Commissions
• Local Development Focus
↓
End

These twin amendments revolutionized local governance by giving constitutional status to Panchayati Raj Institutions and Municipalities. They established a three-tier system of local governance and mandated regular elections. The amendments ensured representation for SC/ST and women through reservation of seats. They provided financial powers and responsibilities to local bodies for self-governance. These amendments significantly strengthened grassroots democracy in India.`
      },
      {
        title: "86th Amendment (2002)",
        description: `Start
↓
86th Amendment (2002)
↓
Education Rights:
• Article 21A Added → Fundamental Right
• Age Group: 6-14 Years
• Free & Compulsory Education
↓
Implementation:
• RTE Act, 2009
• State Responsibilities
• Parental Duties
↓
End

This amendment made education a Fundamental Right for children aged 6-14 years. It added Article 21A to make free and compulsory education a fundamental right. The amendment also made it a Fundamental Duty of parents to provide educational opportunities to their children. It laid the groundwork for the Right to Education Act, 2009. This amendment significantly impacted India's educational landscape and child rights protection.`
      },
      {
        title: "101st Amendment (2016)",
        description: `Start
↓
101st Amendment (2016)
↓
GST Implementation:
• Unified Tax System
• GST Council Formation
• State-Centre Coordination
↓
Economic Impact:
• Single Market Creation
• Simplified Tax Structure
• Improved Business Environment
↓
End

This amendment introduced the Goods and Services Tax (GST) system in India. It created a unified national market by implementing a comprehensive indirect tax reform. The amendment established the GST Council for making recommendations about GST implementation. It harmonized the tax structure across states and improved ease of doing business. This reform represented one of India's biggest economic transformations since independence.`
      },
      {
        title: "103rd Amendment (2019)",
        description: `Start
↓
103rd Amendment (2019)
↓
Reservation Changes:
• 10% EWS Quota
• Economic Criteria Added
• General Category Focus
↓
Implementation:
• Education Sector
• Government Jobs
• Income-Based Criteria
↓
End

This amendment introduced 10% reservation for Economically Weaker Sections (EWS) in education and employment. It added economic criteria to the existing social and educational criteria for reservations. The amendment aimed to support poor sections among the general category. It marked a significant shift in the reservation policy by introducing purely economic criteria. This change expanded the scope of affirmative action in India.`
      }
    ]
  },
  {
     title: "Case Studies",
    content: [
      {
        title: "Kesavananda Bharati Case (1973)",
        description: `This landmark case established the Basic Structure Doctrine of the Indian Constitution. The Supreme Court ruled that while Parliament has the power to amend the Constitution, it cannot alter its "basic structure." The case arose when Kesavananda Bharati, head of a monastery in Kerala, challenged the Kerala government's attempts at land reform.

Key Features:
• Established limits on Parliament's power to amend Constitution
• Defined the Basic Structure Doctrine
• Protected fundamental constitutional features
• Set precedent for judicial review of amendments

The Basic Structure includes:
• Supremacy of the Constitution
• Republican and democratic form of government
• Secular character of the Constitution
• Separation of powers
• Federal character of the Constitution

This case remains one of the most significant decisions in Indian constitutional history, effectively protecting the Constitution's essential features from being amended away.`
      },
      {
        title: "Maneka Gandhi Case (1978)",
        description: `This case revolutionized the interpretation of Article 21 of the Constitution. When Maneka Gandhi's passport was impounded by the government, she challenged the action under Article 21. The Supreme Court expanded the scope of "personal liberty" and introduced the concept of due process.

Key Points:
• Expanded interpretation of Article 21
• Established that procedure must be fair, just, and reasonable
• Connected Article 21 with Article 14 and 19
• Introduced substantive due process
• Protected citizens against arbitrary state action

Impact:
• Strengthened fundamental rights protection
• Improved procedural safeguards
• Enhanced judicial review of administrative actions
• Protected personal liberty and dignity`
      },
      {
        title: "Minerva Mills Case (1980)",
        description: `This case addressed the balance between Fundamental Rights and Directive Principles of State Policy. The Supreme Court examined the constitutionality of the 42nd Amendment Act, which had given primacy to Directive Principles over Fundamental Rights.

Significant Aspects:
• Struck down parts of 42nd Amendment
• Restored balance between Rights and DPSPs
• Protected judicial review
• Reinforced Basic Structure Doctrine

The Court held that:
• Harmony between Rights and DPSPs is essential
• Limited Parliament's power to amend Constitution
• Maintained constitutional supremacy
• Protected democratic principles`
      },
      {
        title: "Vishaka Case (1997)",
        description: `This case led to the formulation of guidelines for preventing sexual harassment at workplace. Following the brutal gang rape of a social worker in Rajasthan, the Supreme Court established the Vishaka Guidelines, which later became the basis for the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013.

Guidelines Included:
• Definition of sexual harassment
• Preventive steps
• Complaint mechanism
• Disciplinary action
• Workers' initiative

Impact:
• Created first workplace harassment law
• Protected women's rights at work
• Established employer responsibility
• Promoted gender equality`
      },
      {
        title: "S.R. Bommai Case (1994)",
        description: `This case defined the limits of Article 356 of the Constitution, which deals with President's Rule in states. The Supreme Court established that the power to impose President's Rule is not absolute and is subject to judicial review.

Key Decisions:
• Made President's Rule subject to judicial review
• Protected state governments from arbitrary dismissal
• Strengthened federalism
• Established secularism as basic structure

Impact:
• Limited central government's power
• Protected state autonomy
• Prevented misuse of Article 356
• Strengthened democratic principles`
      },
      {
        title: "Golaknath Case (1967)",
        description: `This case initially restricted Parliament's power to amend Fundamental Rights. The Supreme Court held that Fundamental Rights are beyond Parliament's amending power, though this was later modified by the Kesavananda Bharati case.

Main Points:
• Protected Fundamental Rights
• Limited Parliament's amending power
• Introduced concept of implied limitations
• Led to 24th Amendment

Historical Significance:
• Sparked debate on amendment powers
• Influenced constitutional development
• Protected citizens' rights
• Led to Basic Structure Doctrine`
      },
      {
        title: "ADM Jabalpur Case (1976)",
        description: `This controversial case dealt with the suspension of fundamental rights during the Emergency period. The Supreme Court initially held that fundamental rights could be completely suspended during Emergency.

Key Issues:
• Right to life during Emergency
• Suspension of fundamental rights
• Judicial review during Emergency
• Executive powers

Legacy:
• Led to 44th Amendment
• Strengthened fundamental rights
• Prevented future rights suspension
• Reformed Emergency provisions`
      },
      {
        title: "Indira Sawhney Case (1992)",
        description: `This case defined the scope and limits of reservations in India. The Supreme Court upheld the Mandal Commission's 27% reservation for OBCs while setting a 50% cap on total reservations.

Major Points:
• Upheld 27% OBC reservation
• Set 50% reservation limit
• Defined creamy layer concept
• Excluded economic criteria alone

Impact:
• Shaped reservation policy
• Promoted social justice
• Balanced equality and affirmative action
• Established reservation framework`
      },
      {
        title: "Navtej Singh Johar Case (2018)",
        description: `This historic case decriminalized consensual homosexual relations by reading down Section 377 of the Indian Penal Code. The Supreme Court recognized LGBTQ+ rights and promoted equality regardless of sexual orientation.

Key Aspects:
• Decriminalized homosexuality
• Protected individual privacy
• Recognized LGBTQ+ rights
• Promoted equality and dignity

Significance:
• Advanced human rights
• Protected personal liberty
• Promoted inclusivity
• Reformed colonial-era law`
      }
    ]
  }
];

const Theory = ({ navigation }) => {
   const navigateToUnit = (unit) => {
     navigation.navigate('Unit', { unit });
   };
 
   return (
     <ImageBackground source={backgroundImage} style={styles.container}>
       <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 50 }}>
         <Text style={styles.title}>Select Unit</Text>
 
         {units.map((unit, index) => (
           <React.Fragment key={index}>
             <TouchableOpacity
               style={styles.unitOption}
               onPress={() => navigateToUnit(unit)}
             >
               <Text style={styles.unitText}>{unit.title}</Text>
             </TouchableOpacity>
             
             {/* Add Additional Resources after the 4th unit */}
             {index === 3 && (
               <Text style={styles.title}>Additional Resources</Text>
             )}
           </React.Fragment>
         ))}
       </ScrollView>
     </ImageBackground>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     paddingTop: 50,
     flex: 1,
     padding: 20,
     backgroundColor: "transparent",
   },
   title: {
     fontSize: 26,
     fontWeight: "bold",
     color: "#000080",
     textAlign: "center",
     marginBottom: 25,
     textTransform: "uppercase",
     letterSpacing: 1,
   },
   unitOption: {
     backgroundColor: "#FFFFFF",
     padding: 18,
     borderRadius: 12,
     marginVertical: 12,
     shadowColor: "#000",
     shadowOffset: { width: 0, height: 3 },
     shadowOpacity: 0.1,
     shadowRadius: 6,
     elevation: 4,
     borderWidth: 3,
     borderColor: "#000080",
   },
   unitText: {
     fontSize: 18,
     fontWeight: "600",
     color: "#000080",
   },
 });
 
 export default Theory;