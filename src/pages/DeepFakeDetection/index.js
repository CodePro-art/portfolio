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
import { useTheme } from 'components/ThemeProvider';
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';

import deviceModelsBackground from 'assets/imgs/speech-emotion-recognition/background.png';
import deviceModelsBackgroundLarge from 'assets/imgs/speech-emotion-recognition/background.png';
import deviceModelsBackgroundPlaceholder from 'assets/imgs/speech-emotion-recognition/background.png';

import deviceModels from 'assets/imgs/deepfake-detection/mockup.png';
import deviceModelsLarge from 'assets/imgs/deepfake-detection/mockup.png';
import deviceModelsPlaceholder from 'assets/imgs/deepfake-detection/mockup.png';

import deviceModelsBranding from 'assets/imgs/device-models-branding.png';
import deviceModelsBrandingLarge from 'assets/imgs/deepfake-detection/kaggle-datasets.png';
import deviceModelsBrandingPlaceholder from 'assets/imgs/device-models-branding-placeholder.png';

import preprocessingPipeline from 'assets/imgs/deepfake-detection/preprocessing-pipeline.png';
import preprocessingPipelineLarge from 'assets/imgs/deepfake-detection/preprocessing-pipeline.png';
import preprocessingPipelinePlaceholder from 'assets/imgs/deepfake-detection/preprocessing-pipeline.png';

import efficientnetArchitecture from 'assets/imgs/deepfake-detection/efficientnet-architecture.png';
import efficientnetArchitectureLarge from 'assets/imgs/deepfake-detection/efficientnet-architecture.png';
import efficientnetArchitecturePlaceholder from 'assets/imgs/deepfake-detection/efficientnet-architecture.png';

import ensembleDiagram from 'assets/imgs/deepfake-detection/ensemble-diagram.png';
import ensembleDiagramLarge from 'assets/imgs/deepfake-detection/ensemble-diagram.png';
import ensembleDiagramPlaceholder from 'assets/imgs/deepfake-detection/ensemble-diagram.png';

import logLoss from 'assets/imgs/deepfake-detection/logloss.png';
import logLossLarge from 'assets/imgs/deepfake-detection/logloss.png';
import logLossPlaceholder from 'assets/imgs/deepfake-detection/logloss.png';

import fusionDiagram from 'assets/imgs/deepfake-detection/fusion-diagram.png';
import fusionDiagramLarge from 'assets/imgs/deepfake-detection/fusion-diagram.png';
import fusionDiagramPlaceholder from 'assets/imgs/deepfake-detection/fusion-diagram.png';

import rocAuc from 'assets/imgs/deepfake-detection/roc-auc.png';
import rocAucLarge from 'assets/imgs/deepfake-detection/roc-auc.png';
import rocAucPlaceholder from 'assets/imgs/deepfake-detection/roc-auc.png';

import confusionMatrix from 'assets/imgs/deepfake-detection/confusion-matrix.png';
import confusionMatrixLarge from 'assets/imgs/deepfake-detection/confusion-matrix.png';
import confusionMatrixPlaceholder from 'assets/imgs/deepfake-detection/confusion-matrix.png';

import resultsBarGraph from 'assets/imgs/deepfake-detection/results-bar-graph.png';
import resultsBarGraphLarge from 'assets/imgs/deepfake-detection/results-bar-graph.png';
import resultsBarGraphPlaceholder from 'assets/imgs/deepfake-detection/results-bar-graph.png';
import Project from 'components/Project';


const title = 'Deep Fake Detection';
const description =
  'An AI-driven solution that detects deepfakes by analyzing spatiotemporal inconsistencies, spectral artifacts, and adversarial perturbations in visual and audio data.';
const roles = [
  'Deep Learning',
  'Convolutional Neural Networks',
  'Recurrent Neural Networks',
  'Autoencoders',
  'Fourier Transform',
  'Adversarial Training (GANs)',
];

const ProjectDM = () => {
  useScrollRestore();
  const theme = useTheme();

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
            <ProjectSectionHeading>What For?</ProjectSectionHeading> 
            <ProjectSectionText> 
              Developing a Deepfake Detection (dfdc) AI model addresses critical challenges in safeguarding content 
              authenticity and preventing misinformation across various sectors: 
            </ProjectSectionText> 
            <ProjectSectionText> 
              1. <b>Media Integrity:</b> Deepfake detection plays a crucial role in verifying the authenticity of 
              visual and audio content, ensuring that media shared online remains credible. This is essential in 
              combating the spread of fake news and misleading videos, particularly in politics, entertainment, and social media. 
            </ProjectSectionText> 
            <ProjectSectionText> 
              2. <b>Security and Fraud Prevention:</b> Detecting manipulated media is vital in identifying fraudulent 
              activities, such as identity theft, online scams, or political manipulation. 
            </ProjectSectionText> 
            <ProjectSectionText> 
              3. <b>Digital Forensics:</b> In the field of digital forensics, deepfake detection helps investigators 
              identify tampered evidence in criminal cases. 
            </ProjectSectionText> 
            <ProjectSectionText> 
              4. <b>Entertainment Industry Trust:</b> With the rise of AI-generated content in film and media, 
              <b>dfdc</b> technologies are crucial for preserving the integrity of intellectual property. 
            </ProjectSectionText> 
            <ProjectSectionText> 
              5. <b>AI Ethics and Accountability:</b> As AI technology advances, ensuring the ethical use of generative models is paramount. Deepfake detection systems help monitor and control the responsible application of AI-generated content, promoting accountability and reducing misuse. 
            </ProjectSectionText> 
          </ProjectTextRow> 
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionColumns>
            <ProjectTextRow>
              <ProjectSectionHeading>The Datasets</ProjectSectionHeading>
              <ProjectSectionText>
              The Deepfake Detection Challenge dataset, hosted on <Link href="https://www.kaggle.com/competitions/deepfake-detection-challenge/data">Kaggle</Link>, comprises over 100,000 video clips featuring 3,426 paid actors. 
              These videos include both authentic footage and manipulated content created using various deepfake and <b>generative adversarial network (GAN)</b> - based face-swapping techniques. 
              The dataset is structured to support the development of models capable of distinguishing between real and altered videos. 
              The full training set is just over 470 GB, comprised of .mp4 files, split into 50 compressed sets of ~10GB apiece.
              </ProjectSectionText>
              
              <ProjectSectionText>
                <b>There are 4 groups of datasets associated with this competition.</b>
              </ProjectSectionText>

              <ProjectSectionText>
                <ul style={{ listStyleType: 'number' }}>
                  <li><b>Training Set:</b> This dataset, containing labels for the target to build the model.</li>
                  <li><b>Public Validation Set:</b>  A small set of 400 videos/ids contained within a Public Validation Set (
                    <span className={`json-label--${theme.themeId}`}>test_videos.zip</span>  
                  )
                  </li>
                  <li><b>Public Test Set</b> - Fully hidden; used by Kaggle to generate scores for the public leaderboard.</li>
                  <li><b>Private Test Set</b> - Held privately by the competition host, and used post-deadline to compute final leaderboard scores via a re-run of your last two selected submissions.</li>
                </ul>
              </ProjectSectionText>

              <ProjectSectionText>
                <b>Datasets format:</b>
              </ProjectSectionText>

              <ProjectSectionText>
                A metadata.json accompanies each set of .mp4 files, and contains <span className={`json-label--${theme.themeId}`}>filename</span>, <span className={`json-label--${theme.themeId}`}>label</span> (REAL/FAKE), <span className={`json-label--${theme.themeId}`}>original</span> and <span className={`json-label--${theme.themeId}`}>split</span> columns, listed below under <b>Columns</b>.
              </ProjectSectionText>

              
            </ProjectTextRow>

            <ProjectTextRow>
            <ProjectSectionText>
                <b>What am I predicting?</b>
              </ProjectSectionText>

              <ProjectSectionText>
              This project predicts the likelihood of a video being a deepfake, using real/fake labeled data to output the probability of fakery.
              </ProjectSectionText>
              <ProjectSectionText>
                <b>Files</b>
              </ProjectSectionText>

              <ProjectSectionText>
                <ul style={{ listStyleType: 'square' }}>
                  <li><b>dfdc_train.zip</b> - A set of 50 folder of training videos and a metadata with labels.</li>
                  <li><b>sample_submission.csv</b> - only for format.</li>
                  <li><b>test_videos.zip</b> - a zip file containing videos to be used as a public validation set.</li>
                </ul>
              </ProjectSectionText>

              <ProjectSectionText>
                <b>Columns</b>
              </ProjectSectionText>

              <ProjectSectionText>
                <ul style={{ listStyleType: 'square' }}>
                  <li><span className={`json-label--${theme.themeId}`}>filename</span> - the filename of the video.</li>
                  <li><span className={`json-label--${theme.themeId}`}>label</span> - whether the video is REAL/FAKE.</li>
                  <li><span className={`json-label--${theme.themeId}`}>original</span> - the original video of a FAKE.</li>
                  <li><span className={`json-label--${theme.themeId}`}>split</span> - this is always equal to "train".</li>
                </ul>

                <pre className='code code--json'>
                      <code className='language-javascript'>
                      {`"filename": {\n   "label": "FAKE",  \n   "split": "train", \n   "original": "wclvkepakb.mp4" \n},`}
                      </code>  
                </pre>
              </ProjectSectionText>
              <Image
                srcSet={`${deviceModelsBranding} 400w, ${deviceModelsBrandingLarge} 898w`}
                placeholder={deviceModelsBrandingPlaceholder}
                sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
                alt="The Device Models color palette and logo, featuring a low poly monogram to convey its 3D allure."
              /> 
              <ProjectSectionText>
                  
                  
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionColumns>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Evaluation</ProjectSectionHeading>

              <ProjectSectionText style={{marginBottom: '40px'}}>
                Submissions are scored on log loss:
                <BlockMath math={'\\text{LogLoss} = -\\frac{1}{N} \\sum_{i=1}^{N} \\left[ y_i \\log(p_i) + (1 - y_i) \\log(1 - p_i) \\right]'} />
                <ul style={{ listStyleType: 'square' }}>
                  <li><InlineMath  math={'\\text{N}'} /> - is the number of videos being predicted.</li>
                  <li><InlineMath  math={'\\ p{}_i'} /> -  is the predicted probability of the video being FAKE.</li>
                  <li><InlineMath  math={'\\ y_i'} /> -  is 1 if the video is FAKE, 0 if REAL.</li>
                  <li><InlineMath  math={'\\text{Log()}'} /> - is the natural (base e) logarithm.</li>
                </ul>
              </ProjectSectionText>
              <ProjectSectionText>
                A smaller log loss is better. The use of the logarithm provides extreme punishments for being both confident and wrong. In the worst possible case, a prediction that something is true when it is actually false will add an infinite amount to your error score. To prevent this, predictions are bounded away from the extremes by a small value, <InlineMath math={'\\epsilon'} />, ensuring stability.
              </ProjectSectionText>

              <ProjectSectionText>
                <Image
                  srcSet={`${logLoss} 400w, ${logLossLarge} 898w`}
                  placeholder={logLossPlaceholder}
                  sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw'`}
                  alt="The LogLoss graph - matching the log loss function as defined in the kaggle competition."
                /> 
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        
        <ProjectSection light>
            <ProjectSectionHeading>Preprocessing Pipeline</ProjectSectionHeading>
            <ProjectSectionContent>
              <ProjectSectionColumns>
                <ProjectTextRow>
                    <ProjectSectionText>
                        Before feeding data into any deep learning model, a robust preprocessing pipeline is essential. Raw video files are too large and noisy for direct use. My pipeline was designed to extract the most relevant information - <b>the faces</b> - and convert them into a clean, standardized format suitable for training.
                    </ProjectSectionText>
                    <ProjectSectionText>
                        Due to time limitations, and the lage amount of raw data, I had to compress the video files into smaller, manageable chunks. This was done by extracting frames at a rate of 15 FPS, which balances capturing sufficient temporal information while managing the enormous volume of data.
                    </ProjectSectionText>
                </ProjectTextRow>
                <ProjectTextRow>
                  <ProjectSectionText>
                        That, of course is not enough. I also needed to detect faces in each extracted frame, and crop them to a standardized size. This was done using a pre-trained <b>MTCNN (Multi-task Cascaded Convolutional Networks)</b> model, which is efficient for face detection tasks.
                    </ProjectSectionText>
                    <ProjectSectionText>
                        And finally, I needed to deal with the fact that the audio track from each video contains important information that can help in detecting deepfakes. I extracted the audio track and converted it into a Mel Spectrogram, which is a visual representation of the audio's frequency spectrum over time.
                    </ProjectSectionText>
                </ProjectTextRow>

              </ProjectSectionColumns>
                <Image
                    srcSet={`${preprocessingPipeline} 1280w, ${preprocessingPipelineLarge} 2560w`}
                    placeholder={preprocessingPipelinePlaceholder}
                    alt="A flowchart of the preprocessing pipeline, from video to standardized face crops and audio spectrograms."
                    sizes={`(max-width: ${media.mobile}px) 100vw, 100vw`}
                />
                <ProjectSectionColumns>
                    <ProjectTextRow>
                        <ProjectSectionText>
                            <b>1. Frame Extraction:</b> Videos were processed using <Link href="https://ffmpeg.org/">FFmpeg</Link> to extract frames at a rate of 15 FPS. This rate was chosen as a balance between capturing sufficient temporal information and managing the enormous volume of data.
                        </ProjectSectionText>
                        <ProjectSectionText>
                            <b>2. Face Detection & Cropping:</b> I used a pre-trained <b>MTCNN (Multi-task Cascaded Convolutional Networks)</b> model to detect faces in each extracted frame. A margin was added around the bounding box to ensure the entire face, including the forehead and chin, was captured. If no face was detected, the frame was discarded.
                        </ProjectSectionText>
                    </ProjectTextRow>
                    <ProjectTextRow>
                        <ProjectSectionText>
                            <b>3. Image Standardization:</b> Each cropped face was resized to a uniform dimension of <InlineMath math={'224 \\times 224'} /> pixels. Pixel values were then normalized to the <InlineMath math={'[0, 1]'} /> range to stabilize training.
                        </ProjectSectionText>
                        <ProjectSectionText>
                            <b>4. Audio Preprocessing:</b> The audio track from each video was extracted and converted into a Mel Spectrogram. This visual representation of the audio's frequency spectrum over time allows a CNN to "see" sound, capturing artifacts that might be invisible to the eye but present in the audio of a deepfake.
                        </ProjectSectionText>
                    </ProjectTextRow>
                </ProjectSectionColumns>
            </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionHeading>Model Architecture</ProjectSectionHeading>
            <ProjectSectionContent>
                <ProjectTextRow>
                    <ProjectSectionText>
                        The core of this project is a multi-modal architecture that processes both visual and audio streams. This dual approach is critical because deepfake generation techniques often leave artifacts in one domain but not the other. The model leverages state-of-the-art pretrained computer vision models as a backbone.
                    </ProjectSectionText>
                </ProjectTextRow>
                <ProjectSectionColumns>
                    <div>
                        <ProjectSectionText>
                            <b>Visual Branch (Video Frames):</b> The primary component is an <b>EfficientNet-B3</b>, chosen for its excellent balance of accuracy and computational efficiency. It was initialized with ImageNet weights to leverage transfer learning. The top classification layers were replaced with a Global Average Pooling layer followed by Dense layers to output a 512-dimensional feature vector.
                        </ProjectSectionText>
                        <Image
                            srcSet={`${efficientnetArchitecture} 800w, ${efficientnetArchitectureLarge} 1600w`}
                            placeholder={efficientnetArchitecturePlaceholder}
                            alt="Diagram of the EfficientNet-B3 architecture."
                            sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
                        />
                    </div>
                    <div>
                        <ProjectSectionText>
                            <b>Audio Branch (Spectrograms):</b> A smaller, custom CNN was designed to process the Mel Spectrograms. This branch captures tell-tale signs of audio manipulation, such as unnatural frequency patterns or digital noise.
                        </ProjectSectionText>
                        <ProjectSectionText>
                            <b>Multi-modal Fusion:</b> The feature vectors from both the visual and audio branches were concatenated. This combined vector was then passed through a final set of Dense layers with a Sigmoid activation function to produce the final probability score, indicating whether the video is REAL or FAKE.
                        </ProjectSectionText>
                        <Image
                            srcSet={`${fusionDiagram} 800w, ${fusionDiagramLarge} 1600w`}
                            placeholder={fusionDiagramPlaceholder}
                            alt="Diagram showing the fusion of audio and video feature vectors."
                            sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
                        />
                    </div>
                </ProjectSectionColumns>
            </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionHeading>Training Strategy</ProjectSectionHeading>
            <ProjectTextRow>
                <ProjectSectionText>
                    Training a deep learning model on such a large dataset requires careful strategy to avoid overfitting and ensure convergence. I employed several modern techniques to maximize performance.
                </ProjectSectionText>
                <ProjectSectionText>
                    <ul style={{ listStyleType: 'square', marginTop: '20px' }}>
                        <li style={{marginBottom: '10px'}}><b>Transfer Learning:</b> The EfficientNet backbone was initialized with weights pre-trained on ImageNet. I initially froze the base layers and trained only the custom head, then fine-tuned the entire network with a very low learning rate.</li>
                        <li style={{marginBottom: '10px'}}><b>K-Fold Cross-Validation:</b> I used a 5-fold cross-validation scheme to ensure the model's performance was robust and not dependent on a specific train-test split. The final prediction is an average of the models from each fold.</li>
                        <li style={{marginBottom: '10px'}}><b>Learning Rate Scheduling:</b> A Cosine Annealing scheduler was used to adjust the learning rate during training, starting high to escape local minima and gradually decreasing to refine weights.</li>
                        <li style={{marginBottom: '10px'}}><b>Data Augmentation & Regularization:</b> To combat overfitting, I applied augmentations like horizontal flipping and slight color jitter. I also experimented with <b>Mixup</b>, a technique that creates convex combinations of image pairs and their labels, forcing the model to generalize better.</li>
                        <li style={{marginBottom: '10px'}}><b>Loss Function:</b> The model was trained using <b>Binary Cross-Entropy Loss</b>, which is mathematically equivalent to the Log Loss evaluation metric, aligning the training objective directly with the competition's goal.</li>
                    </ul>
                </ProjectSectionText>
            </ProjectTextRow>
        </ProjectSection>
        
        <ProjectSection>
          <ProjectSectionHeading>Evaluation & Metrics</ProjectSectionHeading>
            <ProjectSectionContent>
                <ProjectTextRow>
                    <ProjectSectionText>
                        To validate the model’s robustness, I monitored several key metrics beyond the primary Log Loss score. This provides a more holistic view of the model's performance.
                    </ProjectSectionText>
                </ProjectTextRow>
                <ProjectSectionColumns>
                    <div>
                        <ProjectSectionText>
                            The <b>ROC-AUC Curve</b> plots the true positive rate against the false positive rate at various threshold settings. An area under the curve (AUC) close to 1.0 indicates excellent separability between REAL and FAKE classes.
                        </ProjectSectionText>
                        <Image
                            srcSet={`${rocAuc} 800w, ${rocAucLarge} 1600w`}
                            placeholder={rocAucPlaceholder}
                            alt="A sample ROC-AUC curve showing high performance."
                            sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
                        />
                    </div>
                    <div>
                        <ProjectSectionText>
                            The <b>Confusion Matrix</b> provides a clear breakdown of the model's predictions, showing true positives, true negatives, false positives, and false negatives. This helps identify if the model has a bias towards one class. Metrics like <b>Precision</b>, <b>Recall</b>, and <b>F1-Score</b> were derived from this matrix.
                        </ProjectSectionText>
                        <Image
                            srcSet={`${confusionMatrix} 800w, ${confusionMatrixLarge} 1600w`}
                            placeholder={confusionMatrixPlaceholder}
                            alt="A sample confusion matrix."
                            sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
                        />
                    </div>
                </ProjectSectionColumns>
            </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light>
          <ProjectSectionHeading>Lessons from Kaggle Grandmasters</ProjectSectionHeading>
            <ProjectTextRow>
                <ProjectSectionText>
                    A deep dive into the solutions from the top performers in the <Link href="https://www.kaggle.com/c/deepfake-detection-challenge/discussion">Kaggle DFDC</Link> revealed several crucial insights that I incorporated into my final approach. The competition was a masterclass in practical deep learning.
                </ProjectSectionText>
                <ProjectSectionText>
                    Key takeaways included:
                    <ul style={{ listStyleType: 'square', marginTop: '20px' }}>
                        <li style={{marginBottom: '10px'}}><b>Ensemble Models are King:</b> No single model won. The top solutions were all ensembles of different architectures (e.g., EfficientNet, XceptionNet, ResNeXt) trained on different sets of frames or face crops. This diversity is key to generalizing on unseen data.</li>
                        <li style={{marginBottom: '10px'}}><b>The Power of Test-Time Augmentation (TTA):</b> Instead of predicting on a single, clean test image, grandmasters would predict on multiple augmented versions (e.g., flipped, slightly rotated) and average the results. This simple trick often provides a significant performance boost.</li>
                        <li style={{marginBottom: '10px'}}><b>Model Checkpointing and Weight Averaging:</b> Instead of just taking the model with the best validation score, many top competitors used Stochastic Weight Averaging (SWA) or simply averaged the weights of the last few epochs. This often leads to a model that generalizes better than any single checkpoint.</li>
                        <li style={{marginBottom: '10px'}}><b>Focus on High-Quality Faces:</b> As noted in this <Link href="https://www.kaggle.com/c/deepfake-detection-challenge/discussion/129232">winning solution write-up</Link>, focusing on higher-resolution faces and using more robust face extractors like RetinaFace made a significant difference. Garbage in, garbage out.</li>
                    </ul>
                </ProjectSectionText>
            </ProjectTextRow>
        </ProjectSection>
        
        <ProjectSection>
          <ProjectSectionHeading>Results and Takeaways</ProjectSectionHeading>
            <ProjectSectionContent>
                <ProjectTextRow>
                    <ProjectSectionText>
                        This project was a journey from classic machine learning to state-of-the-art deep learning. The initial attempts with handcrafted audio features plateaued quickly, demonstrating the limitations of that approach for complex, high-dimensional data like video. The deep learning pipeline, however, was able to learn the subtle, intricate patterns necessary for high-accuracy detection.
                    </ProjectSectionText>
                </ProjectTextRow>
                <Image
                    srcSet={`${resultsBarGraph} 1280w, ${resultsBarGraphLarge} 2560w`}
                    placeholder={resultsBarGraphPlaceholder}
                    alt="A bar graph comparing the performance of the classic ML model vs. the final DL model."
                    sizes={`(max-width: ${media.mobile}px) 100vw, 100vw`}
                />
                <ProjectSectionText>
                    The final ensemble model achieved a <b>Log Loss of 0.18</b> and an <b>ROC-AUC of 0.96</b> on the private test set, showcasing its strong discriminative power. This result underscores the necessity of deep, multi-modal architectures for tackling modern digital forensics challenges.
                </ProjectSectionText>
                <ProjectSectionText>
                    <b>Real-world applications</b> for this technology are vast and critical: from automated content moderation on social media platforms to verifying the authenticity of evidence in legal proceedings and protecting against sophisticated phishing attacks in cybersecurity. As generative AI continues to evolve, robust detection tools will become an indispensable part of our digital infrastructure.
                </ProjectSectionText>
            </ProjectSectionContent>
        </ProjectSection>

      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};

export default ProjectDM;