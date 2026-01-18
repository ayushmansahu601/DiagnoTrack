# DiagnoTrack

This project is a hospital management application developed using React for the front end and Node.js for the backend, with MongoDB as the database. The system allows hospital staff to efficiently enter and manage patient details.

## Key Features
- **Patient Record Management:** Easily input and store patient details in the MongoDB database.
- **Glaucoma Detection Prompt:** Automatically prompts for family member details if a patient is diagnosed with glaucoma.
- **Family Member Outreach:** Generates warning messages for family members, encouraging them to get screened for glaucoma.
- **User-Friendly Interface:** Designed with a responsive UI for seamless use by hospital staff.

## Tech Stack
- **Frontend:** React
- **Backend:** Node.js
- **Database:** MongoDB

## Initialization Steps

To set up and run the project locally, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/ayushmansahu601/DiagnoTrack.git  # Clone the repository
   cd DiagnoTrack  # Change to the project directory
2.**Install Dependencies for Backend**

    ```bash
    cd backend  # Navigate to the backend directory
    npm install  # Install backend dependencies
3.**Install Dependencies for Frontend**
   
    ```bash
    cd ../frontend  # Navigate to the frontend directory
    npm install  # Install frontend dependencies
4.Run the Application
  
    ```bash
    cd ../backend  # Navigate to the backend directory
    npm start  # Start the backend server

5.Start the frontend application:
    
    ```bash
    cd ../frontend  # Navigate to the frontend directory
    npm start  # Start the frontend application
Summary: Key Diseases That Trigger Family Screening

| Category       | Examples                  |
| -------------- | ------------------------- |
| Cardiovascular | Marfan, HCM, Long QT      |
| Cancer         | BRCA, Lynch, Li-Fraumeni  |
| Metabolic      | Wilson’s, Hemochromatosis |
| Neuromuscular  | Duchenne, Fragile X       |
| Hematologic    | Sickle cell, Thalassemia  |
| Multi-system   | Cystic fibrosis, FAP      |

🧬 Genetic Diseases That Require Family Screening After Diagnosis

Below is a categorized list of genetic diseases where first-degree relatives (parents, siblings, children) — and sometimes second-degree relatives — should be offered genetic testing or screening.
1. Autosomal Dominant Disorders

These have a 50% chance of being passed to children, so family screening is strongly recommended.

| Disease                                         | Gene(s)                  | Who Should Be Screened      | Reason                                                 |
| ----------------------------------------------- | ------------------------ | --------------------------- | ------------------------------------------------------ |
| **Marfan syndrome**                             | *FBN1*                   | Parents, siblings, children | Early detection prevents aortic rupture via monitoring |
| **Familial hypercholesterolemia (FH)**          | *LDLR, APOB, PCSK9*      | First-degree relatives      | Early statin therapy prevents heart disease            |
| **Hypertrophic cardiomyopathy (HCM)**           | *MYH7, MYBPC3*           | First-degree relatives      | Prevent sudden cardiac death                           |
| **Long QT syndrome**                            | *KCNQ1, KCNH2, SCN5A*    | Family members              | Risk of fatal arrhythmias                              |
| **Hereditary breast and ovarian cancer (HBOC)** | *BRCA1, BRCA2*           | Sisters, daughters, mother  | Risk-reducing surgery/surveillance                     |
| **Lynch syndrome (HNPCC)**                      | *MLH1, MSH2, MSH6, PMS2* | Parents, siblings, children | Colonoscopy and cancer prevention                      |
| **Li-Fraumeni syndrome**                        | *TP53*                   | Parents, siblings, children | Whole-body MRI and cancer surveillance                 |
| **Familial adenomatous polyposis (FAP)**        | *APC*                    | All first-degree relatives  | Early colonoscopy, prophylactic colectomy              |
| **Von Hippel–Lindau disease**                   | *VHL*                    | Parents, siblings, children | Tumor surveillance (CNS, kidney, pancreas)             |
| **Hereditary spherocytosis**                    | *ANK1, SPTB, SLC4A1*     | Family members              | Monitor anemia, gallstones                             |

🧬 Genetic Diseases That Require Family Screening After Diagnosis

Below is a categorized list of genetic diseases where first-degree relatives (parents, siblings, children) — and sometimes second-degree relatives — should be offered genetic testing or screening.

| Disease                       | Gene(s)          | Who Should Be Screened              | Reason                                          |
| ----------------------------- | ---------------- | ----------------------------------- | ----------------------------------------------- |
| **Cystic fibrosis**           | *CFTR*           | Siblings, parents (carrier testing) | Identify carriers for family planning           |
| **Sickle cell disease**       | *HBB*            | Siblings, parents                   | Carrier status important for future pregnancies |
| **Thalassemias (α, β)**       | *HBA1/HBA2, HBB* | Parents, siblings, partners         | Prenatal testing, carrier detection             |
| **Tay–Sachs disease**         | *HEXA*           | Parents, siblings                   | Prevent recurrence in future pregnancies        |
| **Phenylketonuria (PKU)**     | *PAH*            | Parents, siblings                   | Carrier testing for family planning             |
| **Wilson’s disease**          | *ATP7B*          | Siblings                            | Early treatment prevents liver and brain damage |
| **Hemochromatosis**           | *HFE*            | Siblings, children                  | Early phlebotomy prevents organ failure         |
| **Glycogen storage diseases** | Various          | Siblings                            | Identify asymptomatic carriers or mild cases    |

3. X-linked Disorders

Usually affect males; female relatives may be carriers and can pass the gene to their sons.
| Disease                                   | Gene(s)  | Who Should Be Screened     | Reason                                          |
| ----------------------------------------- | -------- | -------------------------- | ----------------------------------------------- |
| **Duchenne/Becker muscular dystrophy**    | *DMD*    | Mother, sisters            | Carrier detection and prenatal counseling       |
| **Hemophilia A/B**                        | *F8, F9* | Mother, sisters            | Carrier testing and pregnancy risk              |
| **Fragile X syndrome**                    | *FMR1*   | Mother, sisters, daughters | Assess carrier status for reproductive planning |
| **G6PD deficiency**                       | *G6PD*   | Mother, brothers           | Risk of hemolysis in carriers                   |
| **Ornithine transcarbamylase deficiency** | *OTC*    | Female relatives           | Risk of hyperammonemia during illness           |

4. Mitochondrial Disorders

Maternally inherited — all children of an affected mother may be at risk.

| Disease                                | Example         | Who Should Be Screened              | Reason                                    |
| -------------------------------------- | --------------- | ----------------------------------- | ----------------------------------------- |
| **MELAS, MERRF, LHON, Leigh syndrome** | mtDNA mutations | Maternal lineage (mother, siblings) | Identify carriers and anticipate symptoms |


5. Cancer Predisposition Syndromes

Testing allows preventive interventions.
| Syndrome                         | Gene                     | Relatives to Test          | Action                                |
| -------------------------------- | ------------------------ | -------------------------- | ------------------------------------- |
| **BRCA1/BRCA2 (HBOC)**           | *BRCA1, BRCA2*           | All adult female relatives | MRI, mastectomy, oophorectomy options |
| **Lynch syndrome**               | *MLH1, MSH2, MSH6, PMS2* | Siblings, children         | Colonoscopy every 1–2 years           |
| **FAP**                          | *APC*                    | First-degree relatives     | Early colectomy prevents colon cancer |
| **RET proto-oncogene mutations** | *RET*                    | Relatives                  | Screen for thyroid cancer             |
| **TP53 (Li-Fraumeni)**           | *TP53*                   | Relatives                  | Whole-body MRI screening              |


Metabolic and Storage Disorders
| Disease                  | Who to Test            | Reason                                           |
| ------------------------ | ---------------------- | ------------------------------------------------ |
| **Wilson’s disease**     | Siblings               | Early copper chelation can prevent liver failure |
| **Hemochromatosis**      | First-degree relatives | Early detection and treatment by phlebotomy      |
| **Familial amyloidosis** | Siblings               | Monitor and start early treatment                |
