import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  ImageBackground
} from "react-native";
import { styles } from './styles'; 
const FirstForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    email: "",
    passWord: "",
    weight: "",
    height: "",
    gender:"",
    goal:"",
    gender:"", 
    age:"", 
    bodyType:"", 
    focusArea:[], 
    fitnessLevel:"",
    trainingDays:"", 
    genetics:"", 
    dailyRoutine:"",
    trainingEquipment:"", 
    bmi:"", 
    bmiString:"",
    bmr:""
  });
  const [step, setStep] = useState(1);

  const handleContinue = (field) => {
    switch(step){
      case 1 : 
        if((formData.fullName != "") && (formData.userName != "") && (formData.email != "") && (formData.passWord != ""))
          setStep(step + 1);
        break;
      case 2 : 
        if((formData.gender != "") && (formData.height != "") && (formData.weight != "") && (formData.age != ""))
          setStep(step + 1);
        break;
      case 3 : 
        if(formData.goal != "")
          setStep(step + 1);      
        break;
      case 4 : 
        if(formData.fitnessLevel != "")
          setStep(step + 1);
        break;
      case 5 : 
        if(formData.trainingDays != "")
          setStep(step + 1);
        break;
      case 6 : 
        if(formData.genetics != "")
          setStep(step + 1);
        break;
      case 7 : 
        if(formData.dailyRoutine != "")
          setStep(step + 1);
        break;
      case 8 : 
        if(formData.trainingEquipment){
          calculateBmi()
          calculateBmr()
          setStep(step + 1);
        }
      break;
    }
   /* if (formData[field] !== "") {
      // Handle button press here
      setStep((prevStep) => prevStep + 1); // Increment the step
    }*/
  };


  const calculateBmr = () => {
    /*
    For men:
      BMR = 10W + 6.25H - 5A + 5
    For women:
      BMR = 10W + 6.25H - 5A - 161
    */ 
    switch(formData.dailyRoutine){
      case 'Low':
        activity = 1.2
        break;
      case 'Average':
        activity = 1.55
        break;
      case 'High':
        activity = 1.725
        break;
      default : 
        activity = 0
        break;
    }

    bmrTemp = 10*formData.weight + 6.25*formData.height - 5*formData.age + 5

    if(formData.gender == "female")
    bmrTemp -= 166 

    setFormData((prevFormData) => ({
      ...prevFormData,
      bmr: bmrTemp.toFixed(0)
    })); 
  };
  
  const calculateBmi = () => {
    height = formData.height / 100
    setFormData((prevFormData) => ({
      ...prevFormData,
      bmi: (formData.weight / (height * height)).toFixed(1)
    })); 
  };

  const handlePrevious = () => {
    // Handle button press here
    setStep(step - 1); // Increment the step
  };
  const handleMale = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      gender: formData.gender === "male" ? "" : "male",
    }));
  };
  
  const handleFemale = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      gender: formData.gender === "female" ? "" : "female",
    }));
  };

  const handleGoal = (goal) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      goal: formData.goal === goal ? "" : goal,
    }));
  };

  const handleLevel = (level) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      fitnessLevel: formData.fitnessLevel === level ? "" : level,
    }));
  };

  const handleWeights = (n) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      trainingEquipment: formData.trainingEquipment === n ? "" : n,
    }));
  };
  const handleDays = (n) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      trainingDays: formData.trainingDays === n ? "" : n,
    }));
  };
  const handleGenetics = (n) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      genetics: formData.genetics === n ? "" : n,
    }));
  };
  const handleRoutine = (n) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      dailyRoutine: formData.dailyRoutine === n ? "" : n,
    }));
  };

  StatusBar.setBackgroundColor("#fff");
  StatusBar.setBarStyle("dark-content");

  const titles = ["We're glad to have you","About you", 
  "Your Goal","Your fitness level", "Your Availability",
  "Your Body type", "Daily Activity", "Equipment", "Results"]
  const subtitles = ["Let's start by your account information.",
  "Fill your body information.", 
  "Let's define your goals to help you to achieve it.",
  "How would you describe your fitness level ?", "You can train for how many days per week ?",
  "Among these options, what is your body type ?",
  "How would you describe a day of yours ?",
  "What training equipment is available to you ?",
  "Here are results w kada"
]

  return (
    <View style={styles.pageWrapper}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        style={styles.contentContainer}
      >
          <View>
            
            <Text style={styles.pageTitle}>{titles[step-1]}</Text>
            <Text style={styles.pageSubtitle}>
              {subtitles[step - 1]}
            </Text>
          </View>
        


        
        {step === 1 && (
          <View style={styles.form}>
            <Text style={styles.label}> Username </Text>
            <TextInput
              style={styles.textField}
              placeholder="JonDoe123"
              value={formData.userName}
              onChangeText={(text) =>
                setFormData({ ...formData, userName: text })
              }
            />
            <Text style={styles.label}> Full Name </Text>
            <TextInput
              style={styles.textField}
              placeholder="Jon Doe"
              value={formData.fullName}
              onChangeText={(text) =>
                setFormData({ ...formData, fullName: text })
              }
            />
            <Text style={styles.label}> Email </Text>
            <TextInput
              style={styles.textField}
              placeholder="jon@doe.com"
              value={formData.email}
              onChangeText={(text) => setFormData({ ...formData, email: text })}
            />
            <Text style={styles.label}> Password </Text>
            <TextInput
              style={styles.textField}
              secureTextEntry={true}
              placeholder="****"
              value={formData.passWord}
              onChangeText={(text) =>
                setFormData({ ...formData, passWord: text })
              }
            />
          </View>
        )}
        {step === 2 && (
          <View style={styles.form}>
            <Text style={styles.label}>Gender </Text>
            <View style={styles.gendersContainer}>
            <View style={styles.gendersWrapper}>
              {formData.gender == "male" ? (
                  <TouchableOpacity  onPress={handleMale} style={styles.genderChoiceSelected}>
                  <Image source={require("../../assets/icons/male.png")}
                  style={styles.genderImage} />
                  <Text style={styles.genderText}>Male</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity   onPress={handleMale} style={styles.genderChoice}>
                <Image source={require("../../assets/icons/male.png")}
                style={styles.genderImage} />
                <Text style={styles.genderText}>Male</Text>
              </TouchableOpacity>
              )}
              {formData.gender == "female" ? (
                  <TouchableOpacity   onPress={handleFemale} style={styles.genderChoiceSelected}>
                  <Image source={require("../../assets/icons/female.png")}
                    style={styles.genderImage} />
                      <Text style={styles.genderText}>Female</Text>
                  </TouchableOpacity>
              ) : (
                <TouchableOpacity  onPress={handleFemale} style={styles.genderChoice}>
              <Image source={require("../../assets/icons/female.png")}
                style={styles.genderImage} />
                  <Text style={styles.genderText}>Female</Text>
              </TouchableOpacity>
              )}
              
              
            </View>
            </View>
            <Text style={styles.label}> Age </Text>
            <TextInput
              style={styles.textField}
              value={formData.age}
              keyboardType="numeric"
              onChangeText={(text) =>
                setFormData({ ...formData, age: text })
              }
            />
            <Text style={styles.label}> Height </Text>
            <TextInput
              style={styles.textField}
              value={formData.height}
              keyboardType="numeric"
              onChangeText={(text) =>
                setFormData({ ...formData, height: text })
              }
            />
            <Text style={styles.label}> Weight </Text>
            <TextInput
              style={styles.textField}
              value={formData.weight}
              keyboardType="numeric"
              onChangeText={(text) =>
                setFormData({ ...formData, weight: text })
              }
            />
          </View>
        )}
        {step === 3 && (
          <View style={styles.form}>
            {formData.goal == "Lose Weight" ? ( 
            <TouchableOpacity onPress={() => handleGoal('Lose Weight')} style={styles.lineChoiceSelected}>
              <View style={styles.lineChoiceText}>
                <Text style={styles.lineChoiceTitle}>Lose Weight </Text>
                <Text style={styles.lineChoiceSubtitle}>
                  
                  Burn fat and get ideal body.
                </Text>
              </View>
              <Image
                source={require("../../assets/icons/fire.png")}
                style={styles.lineChoiceImage}
              />
            </TouchableOpacity>):(
              <TouchableOpacity onPress={() => handleGoal('Lose Weight')} style={styles.lineChoice}>
              <View style={styles.lineChoiceText}>
                <Text style={styles.lineChoiceTitle}>Lose Weight </Text>
                <Text style={styles.lineChoiceSubtitle}>
                  
                  Burn fat and get ideal body.
                </Text>
              </View>
              <Image
                source={require("../../assets/icons/fire.png")}
                style={styles.lineChoiceImage}
              />
            </TouchableOpacity>
            )}
            
            {formData.goal == "Gain Muscle" ? ( 
            <TouchableOpacity onPress={() => handleGoal('Gain Muscle')} style={styles.lineChoiceSelected}>
              <View style={styles.lineChoiceText}>
                <Text style={styles.lineChoiceTitle}>Gain Muscle </Text>
                <Text style={styles.lineChoiceSubtitle}>
                  
                  Gain muscle mass and strength.
                </Text>
              </View>
              <Image
                source={require("../../assets/icons/biceps.png")}
                style={styles.lineChoiceImage}
              />
            </TouchableOpacity>):
            (<TouchableOpacity onPress={() => handleGoal('Gain Muscle')} style={styles.lineChoice}>
              <View style={styles.lineChoiceText}>
                <Text style={styles.lineChoiceTitle}>Gain Muscle </Text>
                <Text style={styles.lineChoiceSubtitle}>
                  
                  Gain muscle mass and strength.
                </Text>
              </View>
              <Image
                source={require("../../assets/icons/biceps.png")}
                style={styles.lineChoiceImage}
              />
            </TouchableOpacity>)}
            {formData.goal == "Improve" ? ( 
            <TouchableOpacity onPress={() => handleGoal('Improve')} style={styles.lineChoiceSelected}>
              <View style={styles.lineChoiceText}>
                <Text style={styles.lineChoiceTitle}>
                  
                  Improve my lifestyle
                </Text>
                <Text style={styles.lineChoiceSubtitle}>
                  
                  Get more disciplined and more active.
                </Text>
              </View>
              <Image
                source={require("../../assets/icons/yoga.png")}
                style={styles.lineChoiceImage}
              />
            </TouchableOpacity>):(
              <TouchableOpacity onPress={() => handleGoal('Improve')} style={styles.lineChoice}>
              <View style={styles.lineChoiceText}>
                <Text style={styles.lineChoiceTitle}>
                  
                  Improve my lifestyle
                </Text>
                <Text style={styles.lineChoiceSubtitle}>
                  
                  Get more disciplined and more active.
                </Text>
              </View>
              <Image
                source={require("../../assets/icons/yoga.png")}
                style={styles.lineChoiceImage}
              />
            </TouchableOpacity>
            )}

          </View>
        )}
        {step === 4 && (
          <View style={styles.form}>
            {formData.fitnessLevel == 'Beginner'? ( 
            <TouchableOpacity onPress={() => handleLevel('Beginner')} style={styles.lineChoiceSelected}>
              <View style={styles.lineChoiceText}>
                <Text style={styles.lineChoiceTitle}>Beginner</Text>
                <Text style={styles.lineChoiceSubtitle}>
                  I'm new to fitness and haven't exercised in a long time.
                </Text>
              </View>
              <Image
                source={require("../../assets/icons/beginner.png")}
                style={styles.lineChoiceImage}
              />
            </TouchableOpacity>):(
              <TouchableOpacity onPress={() => handleLevel('Beginner')} style={styles.lineChoice}>
              <View style={styles.lineChoiceText}>
                <Text style={styles.lineChoiceTitle}>Beginner</Text>
                <Text style={styles.lineChoiceSubtitle}>
                  I'm new to fitness and haven't exercised in a long time.
                </Text>
              </View>
              <Image
                source={require("../../assets/icons/beginner.png")}
                style={styles.lineChoiceImage}
              />
            </TouchableOpacity>
            )}
            
            {formData.fitnessLevel == 'Average'? ( 
            <TouchableOpacity onPress={() => handleLevel('Average')} style={styles.lineChoiceSelected}>
              <View style={styles.lineChoiceText}>
                <Text style={styles.lineChoiceTitle}>Average</Text>
                <Text style={styles.lineChoiceSubtitle}>
                I try to exercise at least two to three times a week.
                </Text>
              </View>
              <Image
                source={require("../../assets/icons/mid.png")}
                style={styles.lineChoiceImage}
              />
            </TouchableOpacity>):(
              <TouchableOpacity onPress={() => handleLevel('Average')} style={styles.lineChoice}>
              <View style={styles.lineChoiceText}>
                <Text style={styles.lineChoiceTitle}>Average</Text>
                <Text style={styles.lineChoiceSubtitle}>
                I try to exercise at least two to three times a week.
                </Text>
              </View>
              <Image
                source={require("../../assets/icons/mid.png")}
                style={styles.lineChoiceImage}
              />
            </TouchableOpacity>
            )}
            
            {formData.fitnessLevel == 'Advanced'? ( 
            <TouchableOpacity onPress={() => handleLevel('Advanced')} style={styles.lineChoiceSelected}>
              <View style={styles.lineChoiceText}>
                <Text style={styles.lineChoiceTitle}>Advanced</Text>
                <Text style={styles.lineChoiceSubtitle}>   
                  Fitness is my life and I exercise regularly and look for more challenges.
                </Text>
              </View>
              <Image
                source={require("../../assets/icons/advanced.png")}
                style={styles.lineChoiceImage}
              />
            </TouchableOpacity>):(
              <TouchableOpacity onPress={() => handleLevel('Advanced')} style={styles.lineChoice}>
              <View style={styles.lineChoiceText}>
                <Text style={styles.lineChoiceTitle}>Advanced</Text>
                <Text style={styles.lineChoiceSubtitle}>
                Fitness is my life and I exercise regularly and look for more challenges.
                </Text>
              </View>
              <Image
                source={require("../../assets/icons/advanced.png")}
                style={styles.lineChoiceImage}
              />
            </TouchableOpacity>
            )}
            
           

          </View>
        )}
        {step === 5 && (
          <View style={styles.form}>
            {formData.trainingDays == '3'? ( 
            <TouchableOpacity onPress={() => handleDays('3')} style={styles.lineChoiceSelected}>
              <View style={styles.lineChoiceText}>
                <Text style={styles.lineChoiceTitle}>3 Days per week</Text>
              </View>
            </TouchableOpacity>):(
              <TouchableOpacity onPress={() => handleDays('3')} style={styles.lineChoice}>
              <View style={styles.lineChoiceText}>
                <Text style={styles.lineChoiceTitle}>3 Days per week</Text>
              </View>
            </TouchableOpacity>
            )}
            {formData.trainingDays == '4'? ( 
            <TouchableOpacity onPress={() => handleDays('4')} style={styles.lineChoiceSelected}>
              <View style={styles.lineChoiceText}>
                <Text style={styles.lineChoiceTitle}>4 Days per week</Text>
              </View>
            </TouchableOpacity>):(
              <TouchableOpacity onPress={() => handleDays('4')} style={styles.lineChoice}>
              <View style={styles.lineChoiceText}>
                <Text style={styles.lineChoiceTitle}>4 Days per week</Text>
              </View>
            </TouchableOpacity>
            )}
            {formData.trainingDays == '5'? ( 
            <TouchableOpacity onPress={() => handleDays('5')} style={styles.lineChoiceSelected}>
              <View style={styles.lineChoiceText}>
                <Text style={styles.lineChoiceTitle}>5 Days per week</Text>
              </View>
            </TouchableOpacity>):(
              <TouchableOpacity onPress={() => handleDays('5')} style={styles.lineChoice}>
              <View style={styles.lineChoiceText}>
                <Text style={styles.lineChoiceTitle}>5 Days per week</Text>
              </View>
            </TouchableOpacity>
            )}
            {formData.trainingDays == '6'? ( 
            <TouchableOpacity onPress={() => handleDays('6')} style={styles.lineChoiceSelected}>
              <View style={styles.lineChoiceText}>
                <Text style={styles.lineChoiceTitle}>6 Days per week</Text>
              </View>
            </TouchableOpacity>):(
              <TouchableOpacity onPress={() => handleDays('6')} style={styles.lineChoice}>
              <View style={styles.lineChoiceText}>
                <Text style={styles.lineChoiceTitle}>6 Days per week</Text>
              </View>
            </TouchableOpacity>
            )}
          </View>
        )}         
        {step === 6 && (
          <View style={styles.form}>
            {formData.genetics == "Ectomorph" ? ( 
            <TouchableOpacity onPress={() => handleGenetics('Ectomorph')} style={styles.lineChoiceSelected}>
              <View style={styles.lineChoiceText}>
                <Text style={styles.lineChoiceTitle}>Ectomorph </Text>
                <Text style={styles.lineChoiceSubtitle}>
                My body is thin and it's difficult for me to gain weight and muscle.
                </Text>
              </View>
              <Image
                source={require("../../assets/icons/skull.png")}
                style={styles.lineChoiceImage}
              />
            </TouchableOpacity>):(
               <TouchableOpacity onPress={() => handleGenetics('Ectomorph')} style={styles.lineChoice}>
              <View style={styles.lineChoiceText}>
                <Text style={styles.lineChoiceTitle}>Ectomorph </Text>
                <Text style={styles.lineChoiceSubtitle}>
                My body is thin and it's difficult for me to gain weight and muscle.
                </Text>
              </View>
              <Image
                source={require("../../assets/icons/skull.png")}
                style={styles.lineChoiceImage}
              />
            </TouchableOpacity>
            )}
            {formData.genetics == "Mesomorph" ? ( 
            <TouchableOpacity onPress={() => handleGenetics('Mesomorph')} style={styles.lineChoiceSelected}>
              <View style={styles.lineChoiceText}>
                <Text style={styles.lineChoiceTitle}>Mesomorph </Text>
                <Text style={styles.lineChoiceSubtitle}>
                My body is very responsive, it gains and loses weight easily.
                </Text>
              </View>
              <Image
                source={require("../../assets/icons/flash.png")}
                style={styles.lineChoiceImage}
              />
            </TouchableOpacity>):(
               <TouchableOpacity onPress={() => handleGenetics('Mesomorph')} style={styles.lineChoice}>
              <View style={styles.lineChoiceText}>
                <Text style={styles.lineChoiceTitle}>Mesomorph </Text>
                <Text style={styles.lineChoiceSubtitle}>
                My body is very responsive, it gains and loses weight easily.
                </Text>
              </View>
              <Image
                source={require("../../assets/icons/flash.png")}
                style={styles.lineChoiceImage}
              />
            </TouchableOpacity>
            )}
            {formData.genetics == "Endomorph" ? ( 
            <TouchableOpacity onPress={() => handleGenetics('Endomorph')} style={styles.lineChoiceSelected}>
              <View style={styles.lineChoiceText}>
                <Text style={styles.lineChoiceTitle}>Endomorph </Text>
                <Text style={styles.lineChoiceSubtitle}>
                My body is quick to gain weight and slow to lose it
                </Text>
              </View>
              <Image
                source={require("../../assets/icons/bear.png")}
                style={styles.lineChoiceImage}
              />
            </TouchableOpacity>):(
               <TouchableOpacity onPress={() => handleGenetics('Endomorph')} style={styles.lineChoice}>
              <View style={styles.lineChoiceText}>
                <Text style={styles.lineChoiceTitle}>Endomorph </Text>
                <Text style={styles.lineChoiceSubtitle}>
                My body is quick to gain weight and slow to lose it
                  </Text>
              </View>
              <Image
                source={require("../../assets/icons/bear.png")}
                style={styles.lineChoiceImage}
              />
            </TouchableOpacity>
            )}
          </View>
        )}   
        {step === 7 && (
          <View style={styles.form}>
            {formData.dailyRoutine == "Low" ? ( 
            <TouchableOpacity onPress={() => handleRoutine('Low')} style={styles.lineChoiceSelected}>
              <View style={styles.lineChoiceText}>
                <Text style={styles.lineChoiceTitle}>Low Activity </Text>
                <Text style={styles.lineChoiceSubtitle}>
                I sit a lot and my steps are less than 3,000 steps / I do not exercise.
                </Text>
              </View>
              <Image
                source={require("../../assets/icons/koala.png")}
                style={styles.lineChoiceImage}
              />
            </TouchableOpacity>):(
               <TouchableOpacity onPress={() => handleRoutine('Low')} style={styles.lineChoice}>
              <View style={styles.lineChoiceText}>
                <Text style={styles.lineChoiceTitle}>Low Activity </Text>
                <Text style={styles.lineChoiceSubtitle}>
                I sit a lot and my steps are less than 3,000 steps / I do not exercise.
                </Text>
              </View>
              <Image
                source={require("../../assets/icons/koala.png")}
                style={styles.lineChoiceImage}
              />
            </TouchableOpacity>
            )}
            {formData.dailyRoutine == "Average" ? ( 
            <TouchableOpacity onPress={() => handleRoutine('Average')} style={styles.lineChoiceSelected}>
              <View style={styles.lineChoiceText}>
                <Text style={styles.lineChoiceTitle}>Average Activity </Text>
                <Text style={styles.lineChoiceSubtitle}>
                My movement is moderate during the day. I exercise 3-4 days a week.
                </Text>
              </View>
              <Image
                source={require("../../assets/icons/lion.png")}
                style={styles.lineChoiceImage}
              />
            </TouchableOpacity>):(
               <TouchableOpacity onPress={() => handleRoutine('Average')} style={styles.lineChoice}>
              <View style={styles.lineChoiceText}>
                <Text style={styles.lineChoiceTitle}>Average Activity </Text>
                <Text style={styles.lineChoiceSubtitle}>
                My movement is moderate during the day. I exercise 3-4 days a week.
                </Text>
              </View>
              <Image
                source={require("../../assets/icons/lion.png")}
                style={styles.lineChoiceImage}
              />
            </TouchableOpacity>
            )}
            {formData.dailyRoutine == "High" ? ( 
            <TouchableOpacity onPress={() => handleRoutine('High')} style={styles.lineChoiceSelected}>
              <View style={styles.lineChoiceText}>
                <Text style={styles.lineChoiceTitle}>High Activity </Text>
                <Text style={styles.lineChoiceSubtitle}>
                My movement exceeds 10,000 steps per day / I practice high-intensity exercise 5-6 days a week.
                </Text>
              </View>
              <Image
                source={require("../../assets/icons/rabbit.png")}
                style={styles.lineChoiceImage}
              />
            </TouchableOpacity>):(
               <TouchableOpacity onPress={() => handleRoutine('High')} style={styles.lineChoice}>
              <View style={styles.lineChoiceText}>
                <Text style={styles.lineChoiceTitle}>High Activity </Text>
                <Text style={styles.lineChoiceSubtitle}>
                My movement exceeds 10,000 steps per day / I practice high-intensity exercise 5-6 days a week.                </Text>
              </View>
              <Image
                source={require("../../assets/icons/rabbit.png")}
                style={styles.lineChoiceImage}
              />
            </TouchableOpacity>
            )}
          </View>
        )} 
        {step === 8 && (
          <View style={styles.form}>
            {formData.trainingEquipment == 'Home'? ( 
            <TouchableOpacity onPress={() => handleWeights('Home')} style={styles.lineChoiceSelected}>
              <View style={styles.lineChoiceText}>
                <Text style={styles.lineChoiceTitle}>I train at home.</Text>
              </View>
            </TouchableOpacity>):(
              <TouchableOpacity onPress={() => handleWeights('Home')} style={styles.lineChoice}>
              <View style={styles.lineChoiceText}>
                <Text style={styles.lineChoiceTitle}>I train at home.</Text>
              </View>
            </TouchableOpacity>
            )}  
            {formData.trainingEquipment == 'Weights'? ( 
            <TouchableOpacity onPress={() => handleWeights('Weights')} style={styles.lineChoiceSelected}>
              <View style={styles.lineChoiceText}>
                <Text style={styles.lineChoiceTitle}>I have training weights.</Text>
              </View>
            </TouchableOpacity>):(
              <TouchableOpacity onPress={() => handleWeights('Weights')} style={styles.lineChoice}>
              <View style={styles.lineChoiceText}>
                <Text style={styles.lineChoiceTitle}>I have training weights.</Text>
              </View>
            </TouchableOpacity>
            )}  
            {formData.trainingEquipment == 'Gym'? ( 
            <TouchableOpacity onPress={() => handleWeights('Gym')} style={styles.lineChoiceSelected}>
              <View style={styles.lineChoiceText}>
                <Text style={styles.lineChoiceTitle}>I workout in a gym.</Text>
              </View>
            </TouchableOpacity>):(
              <TouchableOpacity onPress={() => handleWeights('Gym')} style={styles.lineChoice}>
              <View style={styles.lineChoiceText}>
                <Text style={styles.lineChoiceTitle}>I workout in a gym.</Text>
              </View>
            </TouchableOpacity>
            )}  
          </View>
        )} 
        {step === 9 && (
          <View style={styles.form}>
            <Text>BMI : {formData.bmi} </Text>
            <Text>BMR : {formData.bmr} </Text>
          </View>
        )} 
      </ScrollView> 
      <View style={styles.actionsWrapper}>
      {step > 1 ? (            
      <View style={styles.buttonsWrapper}>
        <TouchableOpacity
          style={styles.buttonSecondary}
          onPress={handlePrevious}
        >
          <Text style={styles.buttonTextSecondary}> Previous </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleContinue(step)}>
          <Text style={styles.buttonText}> Continue </Text>
        </TouchableOpacity>
      </View>) : 
      <TouchableOpacity style={styles.buttonFull} onPress={() => handleContinue(step)}>
              <Text style={styles.buttonText}> Continue </Text>
      </TouchableOpacity>}
      </View>
      </View>
  );
};
;

export default FirstForm;
