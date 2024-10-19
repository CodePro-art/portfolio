import { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Image from 'components/Image';
import Link from 'components/Link';
import { Button } from 'components/Button';
import Footer from 'components/Footer';
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
import SegmentedControl, { SegmentedControlOption } from 'components/SegmentedControl';
import { useTheme } from 'components/ThemeProvider';
import { useAppContext, useScrollRestore } from 'hooks';
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

import deviceModelsBanner from 'assets/imgs/device-models-banner.jpg';
import deviceModelsBannerLarge from 'assets/imgs/device-models-banner-large.jpg';
import deviceModelsBannerPlaceholder from 'assets/imgs/device-models-banner-placeholder.jpg';

import deviceModelsComponentsDark from 'assets/imgs/device-models-components-dark.jpg';
import deviceModelsComponentsDarkLarge from 'assets/imgs/device-models-components-dark-large.jpg';
import deviceModelsComponentsDarkPlaceholder from 'assets/imgs/device-models-components-dark-placeholder.jpg';

import deviceModelsComponentsLight from 'assets/imgs/device-models-components-light.jpg';
import deviceModelsComponentsLightLarge from 'assets/imgs/device-models-components-light-large.jpg';
import deviceModelsComponentsLightPlaceholder from 'assets/imgs/device-models-components-light-placeholder.jpg';

import deviceModelsLogo from 'assets/imgs/device-models-logo.png';
import deviceModelsLogoLarge from 'assets/imgs/device-models-logo-large.png';
import deviceModelsLogoPlaceholder from 'assets/imgs/device-models-logo-placeholder.png';

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
  const { themeId } = useTheme();
  const { dispatch } = useAppContext();
  useScrollRestore();

  const isDark = themeId === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    dispatch({ type: 'setTheme', value: themes[index] });
  };

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
          url="https://devicemodels.com"
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
                for our project. We needed a dataset that was large enough to train our model, and diverse
                enough to ensure that our model could generalize well to unseen data.
              </ProjectSectionText>

              <ProjectSectionText>
                <b>We ended up using the following datasets:</b>
              </ProjectSectionText>

              <ProjectSectionText>
                <ul style={{ listStyleType: 'square' }}>
                  <li>
                    <Link href="https://www.kaggle.com/datasets/ejlok1/cremad">
                      Crema-D:
                    </Link>
                    Crowd-sourced Emotional Multimodal Actors Dataset
                  </li>
                  
                  <li>
                    <Link href="https://www.kaggle.com/datasets/uwrfkaggler/ravdess-emotional-speech-audio">
                      Ravdess:
                    </Link>
                    Ryerson Audio-Visual Database of Emotional Speech and Song</li>
                  <li>
                    <Link href="https://www.kaggle.com/datasets/ejlok1/surrey-audiovisual-expressed-emotion-savee">
                      Savee:
                    </Link>
                    Surrey Audio-Visual Expressed Emotion
                  </li>
                  <li>
                    <Link href="https://www.kaggle.com/datasets/ejlok1/toronto-emotional-speech-set-tess">
                      Tess:
                    </Link>
                    Toronto emotional speech set
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

            </ProjectTextRow>
            <ProjectTextRow>
              <ProjectSectionHeading>Data Pre-processing</ProjectSectionHeading>

              <ProjectSectionText>
                We worked with four different datasets, which required us to organize and merge them into a single dataset, ensuring the data was correctly formatted and that the data distribution was balanced. Once the data was combined, several steps and considerations were taken into account for preprocessing the data before training our Speech Emotion Recognition (SER) model:
              </ProjectSectionText>

              <ProjectSectionText>

              <ProjectSectionText>
                1. <b>Audio Loading:</b> We ensured that all audio files from the different datasets had a consistent sample rate, normalizing them to a standard (e.g., 16 kHz). Silent sections at the beginning and end of the clips were trimmed to focus on the relevant speech.
              </ProjectSectionText>

              <ProjectSectionText>
                2. <b>Feature Extraction:</b> Key features like MFCC (Mel-Frequency Cepstral Coefficients), spectrograms, chroma features, and pitch were extracted. These features capture essential elements such as power spectrum, frequency, and emotional intonation of the speech, providing the model with a robust representation of the data.
              </ProjectSectionText>

              <ProjectSectionText>
                3. <b>Data Augmentation:</b> To enhance the model’s generalization and avoid overfitting, we applied data augmentation techniques like time-stretching, pitch shifting, and adding background noise. These methods helped simulate real-world variations and diversify the training data.
              </ProjectSectionText>

              <ProjectSectionText>
                4. <b>Normalization:</b> The extracted features were normalized using techniques like Z-score normalization to ensure that all data points had comparable scales, helping the model converge more efficiently during training.
              </ProjectSectionText>

              <ProjectSectionText>
                5. <b>Label Encoding:</b> Emotion labels were transformed into numeric values using one-hot encoding, making the labels machine-readable for model training.
              </ProjectSectionText>

              <ProjectSectionText>
                6. <b>Padding and Windowing:</b> Audio clips were padded to a uniform length, and in cases where audio files were too long, windowing techniques were used to split them into smaller chunks, allowing the model to process temporal variations more effectively.
              </ProjectSectionText>

              <ProjectSectionText>
                7. <b>Noise Reduction:</b> For datasets with noisy recordings, we applied noise reduction methods to clean up the audio, improving the quality of the features used for training.
              </ProjectSectionText>

              <ProjectSectionText>
                8. <b>Shuffling and Splitting:</b> Finally, the preprocessed data was shuffled to ensure a good mix of samples and then split into training, validation, and test sets, ensuring balanced data distribution across different emotions.
              </ProjectSectionText>
                
              </ProjectSectionText>

              <ProjectSectionText>
              To preprocess the data, we utilized the {' '}
                <Link href="https://librosa.org/doc/latest/index.html">
                  librosa 
                </Link> library. For those unfamiliar, librosa is a powerful Python library specifically designed for analyzing and processing audio signals. It’s commonly used for extracting features such as Mel-frequency cepstral coefficients (MFCCs), spectrograms, and more.
              </ProjectSectionText>

              <ProjectSectionText>
              In order to store and display, and analyze the data we used {' '}
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
                I also discarded 'surprise' at some point because it was too rare to be useful for the training of the model and not as important for our 'use-case'.
              </ProjectSectionText>
              
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Feature Engineering and Extraction</ProjectSectionHeading>
              <ProjectSectionText>
                The audio data provided cannot be understood by the models directly, at least not in classic machine learning, so we need to convert it into
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

              <ProjectTextRow>
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

                <ProjectSectionText>
                  I found an optimal <b>sample rate</b> for our needs and used it on the audio files to create the <b>sampled data</b>, and by using librosa, perform several transformations to extract valuable features:

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
                  All the features extracted are then stored in a <b>pandas dataframe</b> and saved in a <b>csv</b> file for future (reusability) use.
                </ProjectSectionText>

                <Image
                  style={{ marginTop: '40px', marginBottom: '60px' }}
                  srcSet={`${FeaturesTable} 1280w, ${FeaturesTableLarge} 2560w`}
                  placeholder={FeaturesTablePlaceholder}
                  alt="A promotional banner for Device Models, displaying a variety of devices and bright colors."
                  sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 2000px, 4000px`}
                />

                
              </ProjectTextRow>

            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <Image
              key={themeId}
              srcSet={`${
                isDark ? deviceModelsComponentsDark : deviceModelsComponentsLight
              } 800w, ${
                isDark
                  ? deviceModelsComponentsDarkLarge
                  : deviceModelsComponentsLightLarge
              } 1000w`}
              placeholder={
                isDark
                  ? deviceModelsComponentsDarkPlaceholder
                  : deviceModelsComponentsLightPlaceholder
              }
              alt={`A set of ${themeId} themed components for the Device Models design system`}
              sizes="100vw"
            />
            <ProjectTextRow>
              <SegmentedControl
                currentIndex={themes.indexOf(themeId)}
                onChange={handleThemeChange}
              >
                <SegmentedControlOption>Dark theme</SegmentedControlOption>
                <SegmentedControlOption>Light theme</SegmentedControlOption>
              </SegmentedControl>
            </ProjectTextRow>
            <ProjectTextRow>
              <ProjectSectionHeading>Design and Development</ProjectSectionHeading>
              <ProjectSectionText>
                Keeping the look and feel of Device Models consistent across its online
                presence was a difficult challenge. It was critical to remain consistent
                in both messaging and appearance while curating to different platforms.
              </ProjectSectionText>
              <ProjectSectionText>
                Keeping to a universal,{' '}
                <Link href="https://storybook.devicemodels.com">
                  component-based design
                </Link>
                , the "look and feel" remained nice and tidy, and both the aesthetics and
                user experience were well-informed across the board.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Show, not Tell</ProjectSectionHeading>
              <ProjectSectionText>
                I embrace the idea of "show, not tell" when marketing innovative products.
                Wide-spread adoption is momentum-based, and you have to give users a
                reason to jump onboard, hype or not. I like putting the product in front
                of them and letting its productivity powers speak for itself.
              </ProjectSectionText>
              <ProjectSectionText>
                With a bold show of identity, I included the very 3D components used on
                the plugin both within marketing material and online, featuring its
                variations to communicate its flexibility (using Device Models, of
                course).
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${deviceModelsBanner} 1280w, ${deviceModelsBannerLarge} 2560w`}
              placeholder={deviceModelsBannerPlaceholder}
              alt="A promotional banner for Device Models, displaying a variety of devices and bright colors."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <Image
                srcSet={`${deviceModelsLogo} 180w, ${deviceModelsLogoLarge} 320w`}
                placeholder={deviceModelsLogoPlaceholder}
                alt="The Device Models logo."
                sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 220px`}
                style={{ maxWidth: 220, width: '100%', marginBottom: 30 }}
              />
              <ProjectSectionHeading>The Result</ProjectSectionHeading>
              <ProjectSectionText>
                Using classic machine learning techniques and domain knowledge, I reached 70% accuracy on my first project. After hitting a performance ceiling, I introduced a deep learning model, which boosted accuracy to 98%. This highlighted the importance of evolving techniques to overcome limitations.
              </ProjectSectionText>

              <Button
                secondary
                iconHoverShift
                icon="chevronRight"
                href="https://devicemodels.com"
              >
                View on Figma
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
