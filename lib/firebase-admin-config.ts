import { initializeApp, getApps, cert } from 'firebase-admin/app';

const firebaseAdminConfig = {
  credential: cert({
    projectId: "next-app-b627f",
    privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCv8d9zEGE+PbVY\n4Nxk2pkl7Q1RLuPJkzVxBi/FB15H9WuQeG0XSqWwFcT95bf7TXrd9SBtNGyTcdum\nqqBNn0oGnuIfPFGNOqFxksePhmKJOdksz5f2YF/nTFRWFpORSMadsDjCb26mWTX2\nWuhkQODhj1a4gYPjRiVSvhBrHDG07amYAOn1vO5yRe8Mnzek4IhUOe0eTNgIwAqA\n/iE/SX63lZPUuCNqsZlPBGtgaMAgpqnI8/5K/x36NTdNMxYWsreyeAJWNI9st1EE\nTV+h86y9+npJbHkK/cCPG7PX1zIdFireekSUipeJei5eh3Hgatftd7khU5Hyv/Ai\nlf1+cGZnAgMBAAECggEABpUiHGDDgSdxsV3WHiMcRhInimTUy/R6nOq5hM1OCuEp\nPm3S/B111rt7ObcXHSJxCp+LPAfLcHwGedUuYrYnMjaUFHBcR0SnSFgK1x8sE6yb\nBSyfeRxa2i/U+EkEffyNf5BCVqSlLK21lH45p8AA6dsVdt72r8XRnO1UX2BpqR8T\nedz2mkqpwVr17VH4MWuWzvySOYg0zLuwZVcv2f7Sb99qCmEZWXiyHAE5hbHmTe/+\nO3R0zqB/UsXCa2BQQPrBy6309dl+rFIVYx9LD4eOajastusQmPmGXwnJvIBD3xA+\noTyqgg9F6eSWIyqBR4J6uQ+NswUjPiG7Jbu87/jyAQKBgQD00Se48txXRDRS4LD4\nHkyvQX5P8642Ql429YxeYOpslStA67/3mvAC/reJARuhdIul5oSktsoE71MeGDCE\nQTXs2JZB1JlLEaFKumSIBgyeCl80VV/lb2TPUIqcMZtS2XnOFqhrZl5kOK5GAykT\nXDM0yqONt8XP8o4YKOivK3zTAQKBgQC3+1bGTsOUPr8xXGV+1RseT9HSRWhaNFvN\n/S3imWkTzvEr8wQaHc+fJMsnaeNMFBf/gnCwed1cqVj7DB6K07Ov70EkmOO4J4/o\nwfI4Sm2USuAiJVCikAOovFMH5qTs0makoTSFoBOeqwnil8N3TDaRokrInEtWCvOW\nSrgpLOSBZwKBgQDemvv6gOH3e630GhjwU2S5Ct1Wx6WF8s0GPjnXa1pdRzngOzz/\nYOOSZZfvPJGqOnXscPH1b7u7xv2V5Lrg1wa4iKv/yddlWe+GKnvU72MzpQyyYlrj\nHWnV1E9k/PpV2CeYTCPyHFAB40Qbpy4HS5PIEeWrrAlzLwMjVrdU6D8FAQKBgDCT\n1F2X/lvuFV1bIBFVA0wFl0kFun/Ww0aoSq1CBFSOl28bQ0ICDQfgFyPY+YLk61Ez\nh72Q77m/nRbsJERTkWYqrfCTzcyZ5Y13aBUk0boN6xAY+ilyDQVIdEPpyjIde6yM\nQ+nkUknar0l8+MdPADmDuGsvmVSmn5pXMDju+YaRAoGBAJj6hjnVLQuGOgctEh1B\nuKUYFzWJXv0u17X9O2fy4wQGU1qT3xEwfA1CKfpAYHZLcr5skHPNWM6Xyf0B133z\nbUllEOsA1kzYy5DYQJk0vEkz9lwayAL3bM9fkmZmrigKc/cuLuZK0dJpnh7eF+KK\nnmlxxPllVjdBFla20Z5eqbBq\n-----END PRIVATE KEY-----\n",
    clientEmail: "firebase-adminsdk-as6r0@next-app-b627f.iam.gserviceaccount.com",
  })
}

export function customInitApp() {
  if (getApps().length <= 0) {
    initializeApp(firebaseAdminConfig);
  }
}