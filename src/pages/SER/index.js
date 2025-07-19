import { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Image from 'components/Image';
import Link from 'components/Link';
import { Button } from 'components/Button';
import Footer from 'components/Footer';
import './index.css';
import {
  ProjectContainer,
  ProjectBackground,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectImage,
  ProjectSectionHeading,
  ProjectSectionColumns,
  ProjectTextRow,
  ProjectSectionText,
} from 'components/ProjectLayout';

import { useScrollRestore } from 'hooks';
import { media } from 'utils/style';
import prerender from 'utils/prerender';

import deviceModelsBackground from 'assets/imgs/speech-emotion-recognition/background.png';
import deviceModelsBackgroundLarge from 'assets/imgs/speech-emotion-recognition/background.png';
import deviceModelsBackgroundPlaceholder from 'assets/imgs/speech-emotion-recognition/background.png';

import deviceModels from 'assets/imgs/speech-emotion-recognition/mockup.png';
import deviceModelsLarge from 'assets/imgs/speech-emotion-recognition/mockup.png';
import deviceModelsPlaceholder from 'assets/imgs/speech-emotion-recognition/mockup.png';

import deviceModelsBranding from 'assets/imgs/device-models-branding.png';
import deviceModelsBrandingLarge from 'assets/imgs/speech-emotion-recognition/kaggle-datasets.png';
import deviceModelsBrandingPlaceholder from 'assets/imgs/device-models-branding-placeholder.png';

import serDataHistogram1 from 'assets/imgs/speech-emotion-recognition/histogram-1.png';
import serDataHistogram1Large from 'assets/imgs/speech-emotion-recognition/histogram-1.png';
import serDataHistogram1Placeholder from 'assets/imgs/speech-emotion-recognition/histogram-1.png';

import serDataHistogram2 from 'assets/imgs/speech-emotion-recognition/histogram-2.png';
import serDataHistogram2Large from 'assets/imgs/speech-emotion-recognition/histogram-2.png';
import serDataHistogram2Placeholder from 'assets/imgs/speech-emotion-recognition/histogram-2.png';

import timeFrequencyDomain from 'assets/imgs/speech-emotion-recognition/time-freq-domain.jpg';
import timeFrequencyDomainLarge from 'assets/imgs/speech-emotion-recognition/time-freq-domain.jpg';
import timeFrequencyDomainPlaceholder from 'assets/imgs/speech-emotion-recognition/time-freq-domain.jpg';

import windowsAnalysis from 'assets/imgs/speech-emotion-recognition/windows-analysis.png';
import windowsAnalysisLarge from 'assets/imgs/speech-emotion-recognition/windows-analysis.png';
import windowsAnalysisPlaceholder from 'assets/imgs/speech-emotion-recognition/windows-analysis.png';

import audioFeatures from 'assets/imgs/speech-emotion-recognition/audio-features.png';
import audioFeaturesLarge from 'assets/imgs/speech-emotion-recognition/audio-features.png';
import audioFeaturesPlaceholder from 'assets/imgs/speech-emotion-recognition/audio-features.png';

import FeaturesTable from 'assets/imgs/speech-emotion-recognition/features.png';
import FeaturesTableLarge from 'assets/imgs/speech-emotion-recognition/features.png';
import FeaturesTablePlaceholder from 'assets/imgs/speech-emotion-recognition/features.png';

import RandomForests from 'assets/imgs/speech-emotion-recognition/random-forest.png';
import RandomForestsLarge from 'assets/imgs/speech-emotion-recognition/random-forest.png';
import RandomForestsPlaceholder from 'assets/imgs/speech-emotion-recognition/random-forest.png';

import SVM from 'assets/imgs/speech-emotion-recognition/svm.png';
import SVMLarge from 'assets/imgs/speech-emotion-recognition/svm.png';
import SVMPlaceholder from 'assets/imgs/speech-emotion-recognition/svm.png';

import FeatureImportanceRF from 'assets/imgs/speech-emotion-recognition/feature-importance-random-forest.png';
import FeatureImportanceRFLarge from 'assets/imgs/speech-emotion-recognition/feature-importance-random-forest.png';
import FeatureImportanceRFPlaceholder from 'assets/imgs/speech-emotion-recognition/feature-importance-random-forest.png';

import Pca from 'assets/imgs/speech-emotion-recognition/pca.png';
import PcaLarge from 'assets/imgs/speech-emotion-recognition/pca.png';
import PcaPlaceholder from 'assets/imgs/speech-emotion-recognition/pca.png';

import HeatmapBeforePca from 'assets/imgs/speech-emotion-recognition/heatmap-before-pca.png';
import HeatmapBeforePcaLarge from 'assets/imgs/speech-emotion-recognition/heatmap-before-pca.png';
import HeatmapBeforePcaPlaceholder from 'assets/imgs/speech-emotion-recognition/heatmap-before-pca.png';

import HeatmapAfterPca from 'assets/imgs/speech-emotion-recognition/heatmap-after-pca.png';
import HeatmapAfterPcaLarge from 'assets/imgs/speech-emotion-recognition/heatmap-after-pca.png';
import HeatmapAfterPcaPlaceholder from 'assets/imgs/speech-emotion-recognition/heatmap-after-pca.png';

// import FeatureImportanceSVM from 'assets/imgs/speech-emotion-recognition/feature-importance-svm.png';
// import FeatureImportanceSVMLarge from 'assets/imgs/speech-emotion-recognition/feature-importance-svm.png';
// import FeatureImportanceSVMPlaceholder from 'assets/imgs/speech-emotion-recognition/feature-importance-svm.png';

// import FeatureImportanceGB from 'assets/imgs/speech-emotion-recognition/feature-importance-gradient-boosting.png';
// import FeatureImportanceGBLarge from 'assets/imgs/speech-emotion-recognition/feature-importance-gradient-boosting.png';
// import FeatureImportanceGBPlaceholder from 'assets/imgs/speech-emotion-recognition/feature-importance-gradient-boosting.png';

import MlVsDl from 'assets/imgs/speech-emotion-recognition/ml-vs-dl.png';
import MlVsDlLarge from 'assets/imgs/speech-emotion-recognition/ml-vs-dl.png';
import MlVsDlPlaceholder from 'assets/imgs/speech-emotion-recognition/ml-vs-dl.png';

import DynamicTimeWrapping from 'assets/imgs/speech-emotion-recognition/dynamic-time-wrapping.gif';
import DynamicTimeWrappingLarge from 'assets/imgs/speech-emotion-recognition/dynamic-time-wrapping.gif';
import DynamicTimeWrappingPlaceholder from 'assets/imgs/speech-emotion-recognition/dynamic-time-wrapping.gif';

import T_sne from 'assets/imgs/speech-emotion-recognition/t-sne.png';
import T_sneLarge from 'assets/imgs/speech-emotion-recognition/t-sne.png';
import T_snePlaceholder from 'assets/imgs/speech-emotion-recognition/t-sne.png';

import ArousalVsValence from 'assets/imgs/speech-emotion-recognition/two-dimensional-valence-arousal-space.png';
import ArousalVsValenceLarge from 'assets/imgs/speech-emotion-recognition/two-dimensional-valence-arousal-space.png';
import ArousalVsValencePlaceholder from 'assets/imgs/speech-emotion-recognition/two-dimensional-valence-arousal-space.png';

import EmotionWheel from 'assets/imgs/speech-emotion-recognition/emotion-wheel.png';
import EmotionWheelLarge from 'assets/imgs/speech-emotion-recognition/emotion-wheel.png';
import EmotionWheelPlaceholder from 'assets/imgs/speech-emotion-recognition/emotion-wheel.png';

const title = 'Speech Emotion Recognition';
const description =
  'Design and development of a unique AI model that can recognize human emotion in speech audio.';
const roles = [
  'Classic Machine Learning',
  'Deep Learning',
  'Dataset Analysis',
  'Feature Extraction',
];

const ProjectDM = () => {
  useScrollRestore();

  return (
    <Fragment>
      <Helmet>
        <title>Projects | {title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <ProjectContainer>
        <ProjectBackground
          srcSet={`${deviceModelsBackground} 1080w, ${deviceModelsBackgroundLarge} 2160w`}
          placeholder={deviceModelsBackgroundPlaceholder}
          entered={!prerender}
        />
        <ProjectHeader
          title={title}
          description={description}
          linkLabel = 'Visit Jupyter Notebook'
          url="https://github.com/netazuz/Emotion-Classification/blob/main/project.ipynb"
          roles={roles}
        />
        
        <ProjectSection first>
          <ProjectSectionContent>
            <ProjectImage
              raised
              srcSet={`${deviceModels} 1280w, ${deviceModelsLarge} 2560w`}
              placeholder={deviceModelsPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="Device Models plugin interface."
            />
          </ProjectSectionContent>
        </ProjectSection>
        
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>What For ?</ProjectSectionHeading>
            <ProjectSectionText>
              Developing a Speech Emotion Recognition (SER) AI model addresses critical 
              challenges in enhancing human-machine interaction and operational efficiency
              across various domains:
            </ProjectSectionText>
            <ProjectSectionText>
              1. <b>Customer Experience Optimization:</b> In call centers, SER enables real-time emotion
              detection, allowing businesses to classify interactions based on customer sentiment. 
              This facilitates timely intervention for dissatisfied customers, improves service quality, 
              and enhances customer satisfaction through data-driven conversational analytics.
            </ProjectSectionText>
            <ProjectSectionText>
              2. <b>Automotive Safety Systems:</b> By detecting drivers' emotional states, SER models can 
              contribute to in-vehicle safety systems. Emotion recognition helps assess driver stress or 
              distraction levels, triggering adaptive responses to prevent accidents, ultimately improving 
              road safety.
            </ProjectSectionText>
            <ProjectSectionText>
              3. <b>Mental Health Monitoring:</b> SER has applications in healthcare, where it can analyze 
              speech for signs of emotional distress, aiding in remote mental health assessments. This allows
              clinicians to monitor emotional well-being, improving early intervention and treatment outcomes.
            </ProjectSectionText>
            <ProjectSectionText>
              4. <b>Human-Computer Interaction (HCI):</b> In AI-driven applications such as virtual assistants 
              or social robots, integrating SER enhances the system's ability to recognize and respond to 
              emotional cues, creating more natural and empathetic interactions.
            </ProjectSectionText>
            <ProjectSectionText>
              5. <b>Conversational Analytics:</b> SER contributes to performance evaluation in areas like sales, 
              education, and therapy by providing insights into emotional tones during communication, enabling 
              organizations to optimize interaction strategies and improve outcomes.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionColumns>
            <ProjectTextRow>
              <ProjectSectionHeading>The Datasets</ProjectSectionHeading>
              <ProjectSectionText>
                With a clear mission and audience in mind, it was time to search for a suitable datasets 
                for my project. I needed a dataset that was large enough to train the model, and diverse
                enough to ensure that the model could generalize well to unseen data.
              </ProjectSectionText>

              <ProjectSectionText>
                <b>I ended up using the following datasets:</b>
              </ProjectSectionText>

              <ProjectSectionText>
                <ul style={{ listStyleType: 'square' }}>
                  <li>
                    <Link href="https://www.kaggle.com/datasets/ejlok1/cremad">
                      Crema-D:
                    </Link> Crowd-sourced Emotional Multimodal Actors Dataset
                  </li>
                  
                  <li>
                    <Link href="https://www.kaggle.com/datasets/uwrfkaggler/ravdess-emotional-speech-audio">
                      Ravdess:
                    </Link> Ryerson Audio-Visual Database of Emotional Speech and Song</li>
                  <li>
                    <Link href="https://www.kaggle.com/datasets/ejlok1/surrey-audiovisual-expressed-emotion-savee">
                      Savee:
                    </Link> Surrey Audio-Visual Expressed Emotion
                  </li>
                  <li>
                    <Link href="https://www.kaggle.com/datasets/ejlok1/toronto-emotional-speech-set-tess">
                      Tess:
                    </Link> Toronto emotional speech set
                  </li>
                </ul>
                
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${deviceModelsBranding} 400w, ${deviceModelsBrandingLarge} 898w`}
              placeholder={deviceModelsBrandingPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The Device Models color palette and logo, featuring a low poly monogram to convey its 3D allure."
            />

            <ProjectTextRow>
              <ProjectSectionHeading>Crema-D</ProjectSectionHeading>
              <ProjectSectionText>
                CREMA-D is a dataset of 7,442 clips from 91 actors (48 male, 43 female), aged 20-74, representing various races and ethnicities. Actors delivered 12 sentences in six emotions (Anger, Disgust, Fear, Happy, Neutral, Sad) across four intensity levels (Low, Medium, High, Unspecified).
              </ProjectSectionText>
            </ProjectTextRow>

            <ProjectTextRow>
              <ProjectSectionHeading>Ravdess</ProjectSectionHeading>
              <ProjectSectionText>
                Ravdess is a dataset of 1,440 emotional speech recordings from 24 actors (12 male, 12 female), aged 20-60. It features 24 sentences delivered in eight emotions (Anger, Disgust, Fear, Happiness, Neutral, Sadness, Surprise, Calm) at varying intensity levels, capturing the nuances of emotional expression.
              </ProjectSectionText>
            </ProjectTextRow>

            <ProjectTextRow>
              <ProjectSectionHeading>Savee</ProjectSectionHeading>
              <ProjectSectionText>
                Savee consists of 1,440 audio clips from 4 professional actors (2 male, 2 female), aged 25-40. The dataset includes seven emotions (Anger, Disgust, Fear, Happiness, Neutral, Sadness, Surprise) expressed through a selection of 24 sentences, each labeled for emotion and intensity.
              </ProjectSectionText>
            </ProjectTextRow>

            <ProjectTextRow>
              <ProjectSectionHeading>Tess</ProjectSectionHeading>
              <ProjectSectionText>
                Tess is a dataset of 200 audio recordings from a single female actor, aged 30, expressing various emotions. It includes emotions such as Anger, Disgust, Fear, Happiness, Sadness, and Surprise, articulated through short sentences and phrases for emotion recognition research.
              </ProjectSectionText>
            </ProjectTextRow>

          </ProjectSectionColumns>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Data Pre-processing</ProjectSectionHeading>

              <ProjectSectionText style={{marginBottom: '40px'}}>
              I merged four datasets into one balanced dataset, then applied key preprocessing steps to prepare it for training the Speech Emotion Recognition (SER) model.
              </ProjectSectionText>

              <ProjectSectionColumns style={{marginBottom: '40px', padding: '0px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignContent: 'stretch', alignItems: 'stretch'}}>  
                <ProjectSectionText style={{padding: '0px'}}>

                  <ProjectSectionText>
                    <p>1. <b>Audio Loading</b></p>
                    <p>I standardized audio to a consistent sample rate and trimmed the silence to focus on relevant speech.</p>
                  </ProjectSectionText>

                  <ProjectSectionText>
                    <p>2. <b>Feature Extraction</b></p>
                    <p>Extracted key features like mfcc, spectrograms, and more, to ease the classification for the model.</p> 
                  </ProjectSectionText>

                  <ProjectSectionText>
                    <p>3. <b>Data Augmentation</b></p> 
                    <p>Applied data augmentation techniques like time-stretching, pitch shifting, and noise addition to prevent overfitting and simulate real-world variations.</p>
                  </ProjectSectionText>

                  <ProjectSectionText>
                    <p>4. <b>Normalization</b></p> 
                    <p>I used Z-score normalization to standardize the extracted features, ensuring comparable scales and more efficient model convergence during training.</p>
                  </ProjectSectionText>
                </ProjectSectionText>

                <ProjectSectionText style={{padding: '0px', margin: '0px'}}>

                  <ProjectSectionText>
                    <p>5. <b>Label Encoding</b></p> 
                    <p>Applied one-hot encoding on emotion labels, making them machine-readable for model training.</p>
                  </ProjectSectionText>

                  <ProjectSectionText>
                    <p>6. <b>Padding and Windowing</b></p> 
                    <p>I padded audio clips and used windowing to split longer ones for better temporal processing.</p> 
                  </ProjectSectionText>

                  <ProjectSectionText>
                    <p>7. <b>Noise Reduction</b> </p>
                    <p>For datasets with noisy recordings, I applied noise reduction methods to clean up the audio, improving the quality of the features used for training.</p> 
                  </ProjectSectionText>

                  <ProjectSectionText>
                    <p>8. <b>Shuffling and Splitting</b></p> 
                    <p>The preprocessed data was shuffled and split into training, validation, and test sets to ensure balanced emotion distribution.</p> 
                  </ProjectSectionText>
                </ProjectSectionText>
                
              </ProjectSectionColumns>

              <ProjectSectionText>
              To preprocess the data, I utilized the {' '}
                <Link href="https://librosa.org/doc/latest/index.html">
                  librosa 
                </Link> library. For those unfamiliar, librosa is a powerful Python library specifically designed for analyzing and processing audio signals. It’s commonly used for extracting features such as Mel-frequency cepstral coefficients (MFCCs), spectrograms, and more.
              </ProjectSectionText>

              <ProjectSectionText>
              In order to store and display, and analyze the data I used {' '}
                <Link href="https://seaborn.pydata.org/">
                  Seaborn 
                </Link>, {' '}
                <Link href="https://matplotlib.org/">
                  Matplotlib 
                </Link>, and {' '}
                <Link href="https://pandas.pydata.org/">
                  Pandas
                </Link> libraries.
              </ProjectSectionText>

              <ProjectSectionColumns>
                <Image 
                  style={{ marginTop: '40px' }}
                  srcSet={`${serDataHistogram1} 1280w, ${serDataHistogram1Large} 2560w`}
                  placeholder={serDataHistogram1Placeholder}
                  alt="A promotional banner for Device Models, displaying a variety of devices and bright colors."
                  sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 2000px, 2300px`}
                />

                <Image 
                  style={{ marginTop: '40px', marginBottom: '60px' }}
                  srcSet={`${serDataHistogram2} 1280w, ${serDataHistogram2Large} 2560w`}
                  placeholder={serDataHistogram2Placeholder}
                  alt="A promotional banner for Device Models, displaying a variety of devices and bright colors."
                  sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 2000px, 2300px`}
                />
              </ProjectSectionColumns>

              <ProjectSectionText>
                I had to deal with an unbalanced data, so I decided to merge 'calm' with 'natural' audios due to their similarity in sound.
                I also discarded 'surprise' at some point because it was too rare to be useful for the training of the model and not as important for my 'use-case'.
              </ProjectSectionText>
              
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionHeading>Feature Engineering and Extraction</ProjectSectionHeading>
          <ProjectSectionColumns>
            
            <ProjectTextRow>
              <ProjectSectionText>
                The audio data provided cannot be understood by the models directly, at least not in classic machine learning, so I need to convert it into
                an understandable format for which feature extraction is used. Audio signals can broadly be categorized as <b>stationary</b> or <b>non-stationary</b>.
              </ProjectSectionText>

              <ProjectSectionText>
                Stationary signals have spectrums that do not change over time, like pure tones. Non-stationary signals have spectrums that change
                over time, like speech signals. To make machine learning-based tasks tractable, non-stationary signals can be approximated as 
                stationary when analyzed at appropriately small time scales. Generally, speech signals are considered stationary when viewed at 
                time scales around 30 ms. Therefore, speech can be characterized by extracting features from 30 ms analysis windows over time.
              </ProjectSectionText>

              <ProjectSectionText>
                When writing the project with MATLAB, use the helper function, <Link href="https://www.mathworks.com/help/audio/ug/audio-feature-selection-for-machine-learning-tasks.html">
                  helperVisualizeBuffer </Link>, to visualize the analysis windows of an audio file. Specify a 30 ms analysis window with 20 ms overlap between adjacent windows. The overlap duration must be less than the window duration. The Analysis Windows of Signal plot shows the individual analysis windows from which features are extracted.  
              </ProjectSectionText>

              <Image
                style={{ marginTop: '40px', marginBottom: '60px' }}
                srcSet={`${windowsAnalysis} 1280w, ${windowsAnalysisLarge} 2560w`}
                placeholder={windowsAnalysisPlaceholder}
                alt="A promotional banner for Device Models, displaying a variety of devices and bright colors."
                sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 2000px, 4000px`}
              />

              <ProjectSectionText>
                <b>Sample Rate</b>: According to the <Link href="https://en.wikipedia.org/wiki/Nyquist%E2%80%93Shannon_sampling_theorem">Nyquist theorem</Link>, the sample rate should be at least twice the highest frequency component in the signal to avoid aliasing. For audio signals, the highest frequency of interest is typically around 20 kHz, so a sample rate of 44.1 kHz or higher (such as 48 kHz, 96 kHz) is commonly used for audio processing.
              </ProjectSectionText>
              
              <ProjectSectionText>
                The audio signal is a three-dimensional signal in which three axes represent <b>time</b>, <b>amplitude</b> and <b>frequency</b>.
              </ProjectSectionText>

              <Image
                style={{ marginTop: '40px', marginBottom: '60px' }}
                srcSet={`${timeFrequencyDomain} 1280w, ${timeFrequencyDomainLarge} 2560w`}
                placeholder={timeFrequencyDomainPlaceholder}
                alt="A promotional banner for Device Models, displaying a variety of devices and bright colors."
                sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 2000px, 4000px`}
              />
            </ProjectTextRow>

            <ProjectTextRow>
                <ProjectSectionText>
                  I used the default (22,050 Hz) <b>sample rate</b> on the audio files to create the <b>sampled data</b>, and by using librosa, perform several transformations to extract valuable <b>features</b>:

                  <ul style={{ listStyleType: 'square' , marginTop: '20px' }}>
                    <li style={{marginBottom: '10px'}}><b>Zero Crossing Rate:</b> The rate of sign-changes of the signal during the duration of a particular frame.</li>
                    <li style={{marginBottom: '10px'}}><b>Energy:</b> The sum of squares of the signal values, normalized by the respective frame length.</li>
                    <li style={{marginBottom: '10px'}}><b>Entropy of Energy:</b> The entropy of sub-frames’ normalized energies. It can be interpreted as a measure of abrupt changes.</li>
                    <li style={{marginBottom: '10px'}}><b>Spectral Centroid:</b> The center of gravity of the spectrum.</li>
                    <li style={{marginBottom: '10px'}}><b>Spectral Entropy:</b> The entropy of the normalized spectral energies for a set of sub-frames.</li>
                    <li style={{marginBottom: '10px'}}><b>Spectral Spread:</b> The second central moment of the spectrum.</li>
                    <li style={{marginBottom: '10px'}}><b>Spectral Flux:</b> The squared difference between the normalized magnitudes of the spectra of the two successive frames.</li>
                    <li style={{marginBottom: '10px'}}><b>Spectral Rolloff:</b> The frequency below which a specified percentage of the total spectral energy is contained.</li>
                    <li style={{marginBottom: '10px'}}><b>MFCCs Mel Frequency Cepstral Coefficients:</b> form a cepstral representation where the frequency bands are not linear but distributed according to the mel-scale.</li>
                    <li style={{marginBottom: '10px'}}><b>Chroma Vector:</b> The chroma vector is a 12-element representation of the spectral energy where the bins represent the 12 equal-tempered pitch classes of western-type music (semitone spacing).</li>
                    <li style={{marginBottom: '10px'}}><b>Chroma Deviation:</b> The standard deviation of the 12 chroma coefficients.</li>
                  </ul>
                </ProjectSectionText>
                <Image
                  style={{ marginTop: '40px', marginBottom: '60px' }}
                  srcSet={`${audioFeatures} 1280w, ${audioFeaturesLarge} 2560w`}
                  placeholder={audioFeaturesPlaceholder}
                  alt="A promotional banner for Device Models, displaying a variety of devices and bright colors."
                  sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 2000px, 4000px`}
                />

                <ProjectSectionText>
                  I stored the extracted features in a <b>pandas dataframe</b> and saved it as a <b>CSV</b> for future use. It may seem redundant, but after training multiple models, you'll see how much time this step saves.
                </ProjectSectionText>

                <Image
                  style={{ marginTop: '40px', marginBottom: '60px' }}
                  srcSet={`${FeaturesTable} 1280w, ${FeaturesTableLarge} 2560w`}
                  placeholder={FeaturesTablePlaceholder}
                  alt="A promotional banner for Device Models, displaying a variety of devices and bright colors."
                  sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 2000px, 4000px`}
                />

            
            </ProjectTextRow>
          </ProjectSectionColumns>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Training the Model</ProjectSectionHeading>

              <ProjectSectionText>
                Selecting the right model for my project was a critical decision. I evaluated various factors, including dataset size, 
                problem complexity, computational resources, and the strengths and limitations of each model. The models I considered 
                included 

                <div className="classifier-container">
                  <div className="classifier" data-tooltip-anchor="top" data-tooltip="A statistical method for predicting binary classes. It estimates the probability that a given input belongs to a particular category."><b>Logistic Regression,</b></div>
                  <div className="classifier" data-tooltip-anchor="top" data-tooltip="A model that splits the data into branches to make decisions based on feature values. It is easy to interpret but can overfit on complex datasets."><b>Decision Trees,</b></div>
                  <div className="classifier" data-tooltip-anchor="top" data-tooltip="An ensemble learning method that combines multiple decision trees to improve accuracy. It reduces the risk of overfitting while handling large datasets effectively."><b>Random Forests,</b></div>
                  <div className="classifier" data-tooltip-anchor="top" data-tooltip="A supervised learning model that finds the hyperplane that best separates data into classes. It is effective in high-dimensional spaces."><b>Support Vector Machines (SVM),</b></div>
                  <div className="classifier" data-tooltip-anchor="top" data-tooltip="A simple algorithm that classifies data based on the closest training examples in the feature space. It’s effective for smaller datasets but can be slow for larger ones."><b>K-Nearest Neighbors (KNN),</b></div>
                  <div className="classifier" data-tooltip-anchor="top" data-tooltip="A probabilistic classifier based on applying Bayes' theorem with strong independence assumptions. It is particularly useful for text classification."><b>Naive Bayes,</b></div>
                  <div className="classifier" data-tooltip-anchor="top" data-tooltip="An ensemble technique that builds models sequentially, with each new model correcting errors made by previous ones. It often achieves high accuracy but can be sensitive to overfitting."><b>Gradient Boosting Machines (GBM),</b></div>
                  <div className="classifier" data-tooltip-anchor="top" data-tooltip="A boosting algorithm that combines multiple weak classifiers to create a strong classifier. It adjusts weights based on the performance of individual classifiers."><b>AdaBoost,</b></div>
                  <div className="classifier" data-tooltip-anchor="top" data-tooltip="A technique that creates multiple subsets of the training data and trains a model on each subset. It helps reduce variance and improves accuracy."><b>Bagging,</b></div>
                  <div className="classifier" data-tooltip-anchor="top" data-tooltip="An optimized gradient boosting library designed for speed and performance. It includes regularization to reduce overfitting."><b>XGBoost,</b></div>
                  <div className="classifier" data-tooltip-anchor="top" data-tooltip="A variant of Naive Bayes that assumes features follow a Gaussian distribution. It is particularly effective for continuous data."><b>Gaussian Naive Bayes,</b></div>
                  <div className="classifier" data-tooltip-anchor="top" data-tooltip="A class of neural networks designed for sequential data. They maintain a memory of previous inputs, making them suitable for tasks like language modeling."><b>Recurrent Neural Networks (RNNs),</b></div> and
                  <div className="classifier" data-tooltip-anchor="top" data-tooltip="A classification technique that assumes a quadratic decision boundary. It is effective when classes have different covariance structures."><b>Quadratic Discriminant Analysis (QDA)</b></div>
                </div>


              </ProjectSectionText>

              <ProjectSectionText>
                <b><u>My top 3 performing models were:</u></b>

                <ul style={{ listStyleType: 'square' , marginTop: '20px' }}>
                    <li style={{marginBottom: '10px'}}>
                      <b>
                        <Link href="https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html">
                          Random Forests: 
                        </Link>, {' '}
                      </b> is considered one of the top choices for multiclass classification tasks: highly versatile, perform well on a wide range of datasets, and are less prone to overfitting compared to individual decision trees.Capable of handling numerical and categorical features and can capture complex relationships in the data. 
                    </li>
                    <li style={{marginBottom: '10px'}}>
                      <b>
                        <Link href="https://scikit-learn.org/stable/modules/svm.html#kernel-functions">
                          Support Vector Machines (SVM): 
                        </Link>, {' '}
                      </b> SVMs are powerful classifiers that work well for multiclass classification tasks. They find the hyperplane that best separates the classes in the feature space, making them effective for high-dimensional data with complex decision boundaries. 
                    </li>
                    <li style={{marginBottom: '10px'}}>
                      <b>
                        <Link href="https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.GradientBoostingClassifier.html">
                          Gradient Boosting Machines (GBM): 
                        </Link>, {' '}
                      </b> Gradient Boosting Machines, such as XGBoost, LightGBM, and CatBoost, are widely used for multiclass classification tasks due to their high predictive accuracy and robustness. GBMs build a sequence of weak learners (typically decision trees) and combine their predictions to improve accuracy. They often outperform other classifiers on structured/tabular data and are highly customizable with various hyperparameters to tune. 
                    </li>
                  </ul>
              </ProjectSectionText>

              <ProjectSectionText>
                <b><u>Model Evaluation:</u></b>
              </ProjectSectionText>

              <ProjectSectionText>
                I trained the models on the training data and evaluated them on the test set, using accuracy as the primary metric. Precision, recall, and F1 score were also considered for a more complete performance analysis.
              </ProjectSectionText>

              <ProjectSectionText>
                According to the following confusion matrices, you can probably already tell which model performed the best. I only include the top two models for the sake of brevity.
              </ProjectSectionText>

              <Image 
                  style={{ marginTop: '40px', marginBottom: '60px' }}
                  srcSet={`${RandomForests} 1280w, ${RandomForestsLarge} 2560w`}
                  placeholder={RandomForestsPlaceholder}
                  alt="A promotional banner for Device Models, displaying a variety of devices and bright colors."
                  sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 2000px, 2300px`}
                />

                <Image 
                  style={{ marginTop: '40px', marginBottom: '60px' }}
                  srcSet={`${SVM} 1280w, ${SVMLarge} 2560w`}
                  placeholder={SVMPlaceholder}
                  alt="A promotional banner for Device Models, displaying a variety of devices and bright colors."
                  sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 2000px, 2300px`}
                />
              
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionHeading>Feature Importance</ProjectSectionHeading>
            <ProjectTextRow>
              <ProjectSectionText>
                Feature importance refers to the quantification of how much each input feature contributes to a model's predictive performance. In this project, where complex vocal signals are processed to detect emotions, thus understanding feature importance is critical to identifying which aspects of speech (such as pitch, tone, intensity, or temporal dynamics) have the most impact on the model's accuracy.
              </ProjectSectionText>

              <ProjectSectionText>
                Each machine learning model has its own way of determining feature importance, but in general, it involves assessing the model's performance when a feature is either included or excluded from the model. By comparing the model's performance with and without a specific feature, we can gauge its importance.
              </ProjectSectionText>

              <Image
                style={{ marginTop: '40px', marginBottom: '60px' }}
                srcSet={`${FeatureImportanceRF} 1280w, ${FeatureImportanceRFLarge} 2560w`}
                placeholder={FeatureImportanceRFPlaceholder}
                alt="A promotional banner for Device Models, displaying a variety of devices and bright colors."
                sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 2000px, 4000px`}
                />

              <ProjectSectionText>
                I have colored and named each group of features for the sake of clarity. The most important features are the ones that are the most used by the model to make predictions. In this case, the most important features are the <b>power spectral density</b>, which was a bit odd at first, because according to the literature <b>MFCCs</b> coefficients are usually the most used features in speech recognition tasks.
              </ProjectSectionText>

              <ProjectSectionText>
                After exploring some more, I found out that the reason behind this phenomenon is that the <b>PSD</b> is a more general feature that captures the overall energy distribution of the signal and has some of the same properties as the <b>MFCCs</b> coefficients, removing PSD from the model not only shortened the training time but also improved the model's overall performance.
              </ProjectSectionText>

              <ProjectSectionText>
              For more details and full documentation, visit my <Link href="https://storybook.devicemodels.com">Jupyter Notebook.</Link>
              </ProjectSectionText>

            </ProjectTextRow>

        </ProjectSection>

        <ProjectSection>
          <ProjectSectionHeading>Principal Component Analysis</ProjectSectionHeading>

          <ProjectSectionColumns>

            <ProjectSectionText>
              <p><b>P</b>rincipal <b>C</b>omponent <b>A</b>nalysis (PCA) optimizes high-dimensional data by reducing its dimensionality. It identifies key features and transforms them into uncorrelated variables, or principal components, that capture the primary data variations for easier interpretation and analysis. When applied to speech data for emotion recognition, PCA isolated essential features, minimized noise and redundancy, and streamlined the dataset. This improved model efficiency, interpretability, and training speed, reducing overfitting risks. As a result, the model focused on core features critical for accurate emotion detection, achieving improved performance with lower computational demands.</p>
              <Image
                style={{ marginTop: '-20px', marginBottom: '120px', paddingTop: '0px' }}
                srcSet={`${Pca} 1280w, ${PcaLarge} 2560w`}
                placeholder={PcaPlaceholder}
                alt="A promotional banner for Device Models, displaying a variety of devices and bright colors."
                sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 2000px, 4000px`}
              />

              <p>Overall, I had 172 features and 9,729 signals (3,243 original files and 6,486 augmented files). Analyzing such a large number of features with a correlation heatmap is challenging but feasible. By applying PCA, I reduced the features to 50—a significant reduction that decreased training time and improved model performance.</p>
              <p style={{marginTop: '15px'}}><b><u>This process is based on a few key principles:</u></b></p>
              <ul style={{ listStyleType: 'square', marginTop: '30px'}}>
                <li><b>Centering the data</b> by subtracting the mean.</li>
                <li>Use <b>covariance matrix</b> to calculate the correlation.</li>
                <li>Extract <b>eigenvalues</b> and <b>eigenvectors</b>.</li>
                <li><b>Dimensionality reduction</b> by choosing the top k eigenvectors.</li>
              </ul>
              <p style={{marginTop: '35px'}}>click <Link href="#">here</Link> to learn more about PCA.</p>
            </ProjectSectionText>

            <ProjectSectionText style={{ margin: '0px', padding: '0px' }}>
              
              <p>The heatmap is dense, yet the red zones clearly highlight features with high correlation. These highly correlated features are crucial, as they are the most utilized by the model in making predictions.</p>

              <Image
                style={{ marginTop: '-40px', marginBottom: '110px' }}
                srcSet={`${HeatmapBeforePca} 1280w, ${HeatmapBeforePcaLarge} 2560w`}
                placeholder={HeatmapBeforePcaPlaceholder}
                alt="A promotional banner for Device Models, displaying a variety of devices and bright colors."
                sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 2000px, 4000px`}
              />
              
              <p>Here, you can see that after applying PCA, the number of features was reduced from 172 to 50, all of which are completely uncorrelated according to the correlation heatmap. PCA allows the programmer to select the desired number of features in the final dataset.</p>

              <Image
                style={{ marginTop: '-30px', padding: '0px' }}
                srcSet={`${HeatmapAfterPca} 1280w, ${HeatmapAfterPcaLarge} 2560w`}
                placeholder={HeatmapAfterPcaPlaceholder}
                alt="A promotional banner for Device Models, displaying a variety of devices and bright colors."
                sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 2000px, 4000px`}
              />
            </ProjectSectionText>

          </ProjectSectionColumns>
          
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionHeading>Machine Learning bottlenecks</ProjectSectionHeading>
            <ProjectTextRow>
              <ProjectSectionText>
                Several bottlenecks can hinder the performance and accuracy of a machine learning model.
              </ProjectSectionText>

              <ProjectSectionText>
                <ul style={{ listStyleType: 'square' }}>
                  <li style={{ marginBottom: '10px' }}><Link href="https://en.wikipedia.org/wiki/Curse_of_dimensionality">Curse of Dimensionality:</Link> Speech data typically has many features, leading to high computational costs and potential overfitting.</li>
                  <li style={{ marginBottom: '10px' }}><b>Feature Extraction Limitations:</b> Traditional machine learning models rely heavily on manually engineered features, which may not fully capture the complexities of emotional expression in speech.</li>
                  <li style={{ marginBottom: '10px' }}><b>Scalability:</b> As the dataset grows, resource requirements & training time can increase significantly, slowing down experimentation and model iteration.</li>
                </ul>
                
              </ProjectSectionText>

              <Image
                style={{ marginBottom: '20px', marginTop: '20px' }}
                srcSet={`${MlVsDl} 1280w, ${MlVsDlLarge} 2560w`}
                placeholder={MlVsDlPlaceholder}
                alt="A promotional banner for Device Models, displaying a variety of devices and bright colors."
                sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              />

              <ProjectSectionText>
                After extensive experimentations — training and testing iterations, modifying sampling rates, applying various windowing functions, engineering new features, implementing augmentations, retraining on curated feature subsets, and even bending traditional coding rules — my model consistently <b> plateaued at a 61% </b> accuracy threshold.
              </ProjectSectionText>

              <ProjectSectionText>
                This outcome is common in classic machine learning, especially with high-dimensional <Link href="https://en.wikipedia.org/wiki/Feature_(machine_learning)#Feature_vectors"></Link>feature space, complex data like audio signals. Traditional models often fail to capture intricate patterns, resulting in poor pattern recognition and limited generalization on unseen data. These models lack the architectural depth to learn complex relationships, underscoring the need for advanced deep learning techniques to identify nuanced, high-order features essential in Speech Emotion Recognition (SER).
              </ProjectSectionText>

              <ProjectSectionText>
                Thus, I turned to deep learning. Using Keras, I built and trained a deep neural network that achieved a remarkable <b>98% accuracy</b>, far surpassing prior results. Even though deep learning is absolutely amazing, this project was first and foremost a machine learning project, and I learned a lot about the limitations and strengths of machine learning.
              </ProjectSectionText>
            </ProjectTextRow>
        </ProjectSection>

        <ProjectSection>
                     

            
            <ProjectSectionHeading>Other Considerations</ProjectSectionHeading>
            <ProjectSectionColumns>

              <ProjectSectionText>
                During the course of my project, I encountered <Link href="https://en.wikipedia.org/wiki/Dynamic_time_warping">Dynamic Time Warping (DTW)</Link>, a highly effective method for measuring similarity between two time series, even when they differ in length, speed, or duration. DTW is a foundational technique in time-series analysis, particularly valuable in speech processing tasks. It aligns sequences by accounting for variations in speed and timing, making it ideal for analyzing speech patterns where the same emotional cues or phrases can be expressed at varying rates or with unique inflections. This capability is instrumental in applications like Speech Emotion Recognition, as it enables the model to capture and compare nuanced temporal patterns, enhancing both pattern recognition and the robustness of feature extraction.
                <Image
                  style={{ marginTop: '-20px', marginBottom: '120px', paddingTop: '0px' }}
                  srcSet={`${DynamicTimeWrapping} 1280w, ${DynamicTimeWrappingLarge} 2560w`}
                  placeholder={DynamicTimeWrappingPlaceholder}
                  alt="A promotional banner for Device Models, displaying a variety of devices and bright colors."
                  sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 2000px, 4000px`}
                />
                Another advanced dimensionality reduction technique I've explored was <Link herf="https://medium.com/@sachinsoni600517/mastering-t-sne-t-distributed-stochastic-neighbor-embedding-0e365ee898ea">t-SNE (t-distributed Stochastic Neighbor Embedding)</Link>, a powerful tool for visualizing and interpreting high-dimensional datasets, especially feature vectors generated by models. t-SNE excels in revealing intricate patterns, clusters, and outliers within complex data, which provides significant insights into data structure and feature relationships. In the context of Speech Emotion Recognition (SER), t-SNE is invaluable for uncovering underlying emotional patterns and clusters that might otherwise remain hidden. 
              </ProjectSectionText>

              <ProjectSectionText style={{ margin: '0px', padding: '0px' }}>
                
              While it doesn’t directly boost model performance, t-SNE’s visualization capabilities enhance our understanding of the dataset’s structure, enabling more informed model adjustments and feature engineering.

                <Image
                  style={{ marginTop: '-40px', marginBottom: '110px' }}
                  srcSet={`${T_sne} 1280w, ${T_sneLarge} 2560w`}
                  placeholder={T_snePlaceholder}
                  alt="A promotional banner for Device Models, displaying a variety of devices and bright colors."
                  sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 2000px, 4000px`}
                />
                
                <p>An alternative approach to interpreting t-SNE involves distributing the data points across a two-dimensional space, where the x-axis represents <i><b>Valence</b></i> and the y-axis represents <i><b>Arousal</b></i>. This method provides a promising strategy for differentiating between various signals through effective feature engineering.</p>

                <Image
                  style={{ marginTop: '-30px', padding: '0px', marginBottom: '100px' }}
                  srcSet={`${ArousalVsValence} 1280w, ${ArousalVsValenceLarge} 2560w`}
                  placeholder={ArousalVsValencePlaceholder}
                  alt="A promotional banner for Device Models, displaying a variety of devices and bright colors."
                  sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 2000px, 4000px`}
                />
                <p>I discovered that this innovative approach was extensively explored in the study <Link href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://www.iajit.org/PDF/July%202018,%20No.%204/11287.pdf">Evaluation of Influence of Arousal-Valence Primitives on Speech Emotion Recognition</Link>, by Imen Trabelsi, Dorra Ben Ayed, and Noureddine Ellouze. </p>
                <p style={{ marginTop: '10px'}}>The primary challenge in this approach lies in selecting optimal features that effectively and correctly distribute the signals along these two axes.</p>
              </ProjectSectionText>

            </ProjectSectionColumns>
        
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <Image
                className={'rotate'}
                srcSet={`${EmotionWheel} 180w, ${EmotionWheelLarge} 320w`}
                placeholder={EmotionWheelPlaceholder}
                alt="The Device Models logo."
                sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 220px`}
                style={{ maxWidth: 220, width: '100%', marginBottom: 30 }}
              />
              <ProjectSectionHeading>The Result</ProjectSectionHeading>
              <ProjectSectionText>
                Using <b>classic machine learning</b> techniques and domain knowledge, I reached <b>70%</b> accuracy on my first project. After hitting a performance ceiling, I introduced a <b>deep learning</b> model, which boosted accuracy to <b>98%</b>. This highlighted the importance of evolving techniques to overcome limitations.
              </ProjectSectionText>

              <Button
                secondary
                iconHoverShift
                icon="chevronRight"
                href="pages/404"
              >
                Try Online Demo
              </Button>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};

export default ProjectDM;
