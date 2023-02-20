import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const login = async (email, password) => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    console.log('Error While Logging the user In');
  }
};

const register = async (firstName, lastName, email, password) => {
  try {
    await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        //Once the user creation has happened successfully, we can add the currentUser into firestore
        //with the appropriate details.
        result.user.updateProfile({displayName: firstName});
        firestore()
          .collection('users')
          .doc(auth().currentUser?.uid)
          .set({
            fname: firstName,
            lname: lastName,
            email: email,
            createdAt: firestore.Timestamp.fromDate(new Date()),
            userImg: null,
          })
          //ensure we catch any errors at this stage to advise us if something does go wrong
          .catch(error => {
            console.log(
              'Something went wrong with added user to firestore: ',
              error,
            );
          });
      });
  } catch (error) {
    console.log('Error While Signing up the user', error);
  }
};

const logout = async () => {
  try {
    await auth().signOut();
  } catch (error) {
    console.log('Error while logging out the user');
  }
};

export {login, register, logout};
