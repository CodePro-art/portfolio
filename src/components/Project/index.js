import React from 'react';
import classNames from 'classnames';
import imageMap from 'assets/maps/imageMap';

import { ReactComponent as AkkaSvg } from 'assets/svgs/akka.svg';
import { ReactComponent as AlfrescoSvg } from 'assets/svgs/alfresco.svg';
import { ReactComponent as AndroidSvg } from 'assets/svgs/android.svg';
import { ReactComponent as AngularSvg } from 'assets/svgs/angular.svg';
import { ReactComponent as AnsibleSvg } from 'assets/svgs/ansible.svg';
import { ReactComponent as ArduinoSvg } from 'assets/svgs/arduino.svg';
import { ReactComponent as ArgoCDSvg } from 'assets/svgs/argocd.svg';
import { ReactComponent as AwsCloudWatchSvg } from 'assets/svgs/aws-cloudwatch.svg';
import { ReactComponent as AwsLambdaSvg } from 'assets/svgs/aws-lambda.svg';
import { ReactComponent as AwsSvg } from 'assets/svgs/aws.svg';
import { ReactComponent as AzureDevOpsSvg } from 'assets/svgs/azure-devops.svg';
import { ReactComponent as BlenderSvg } from 'assets/svgs/blender.svg';
import { ReactComponent as CppSvg } from 'assets/svgs/cpp.svg';
import { ReactComponent as CSvg } from 'assets/svgs/c.svg';
import { ReactComponent as CSharpSvg } from 'assets/svgs/c#.svg';
import { ReactComponent as DartSvg } from 'assets/svgs/dart.svg';
import { ReactComponent as DockerSvg } from 'assets/svgs/docker.svg';
import { ReactComponent as ElkSvg } from 'assets/svgs/elk.svg';
import { ReactComponent as Esp32Svg } from 'assets/svgs/esp32.svg';
import { ReactComponent as Esp8266Svg } from 'assets/svgs/esp8266.svg';
import { ReactComponent as GitBookSvg } from 'assets/svgs/gitbook.svg';
import { ReactComponent as GitActionsSvg } from 'assets/svgs/github-actions.svg';
import { ReactComponent as GitLabSvg } from 'assets/svgs/gitlab.svg';
import { ReactComponent as GoSvg } from 'assets/svgs/go.svg';
import { ReactComponent as GrafanaSvg } from 'assets/svgs/grafana.svg';
import { ReactComponent as HtmlJsCssSvg } from 'assets/svgs/js-html-css.svg';
import { ReactComponent as JenkinsSvg } from 'assets/svgs/jenkins.svg';
import { ReactComponent as JavaSvg } from 'assets/svgs/java.svg';
import { ReactComponent as JuliaSvg } from 'assets/svgs/julia.svg';
import { ReactComponent as KotlinSvg } from 'assets/svgs/kotlin.svg';
import { ReactComponent as KubernetesSvg } from 'assets/svgs/kubernetes.svg';
import { ReactComponent as LoRaSvg } from 'assets/svgs/LoRa.svg';
import { ReactComponent as NginxSvg } from 'assets/svgs/nginx.svg';
import { ReactComponent as OpenTelemetrySvg } from 'assets/svgs/OpenTelemetry.svg';
import { ReactComponent as PackerSvg } from 'assets/svgs/packer.svg';
import { ReactComponent as PhpSvg } from 'assets/svgs/php.svg';
import { ReactComponent as PrometheusSvg } from 'assets/svgs/prometheus.svg';
import { ReactComponent as PythonSvg } from 'assets/svgs/python.svg';
import { ReactComponent as RaspberryPiSvg } from 'assets/svgs/raspberry-pi.svg';
import { ReactComponent as ReactSvg } from 'assets/svgs/react.svg';
import { ReactComponent as RubySvg } from 'assets/svgs/ruby.svg';
import { ReactComponent as RustSvg } from 'assets/svgs/rust.svg';
import { ReactComponent as ScalaSvg } from 'assets/svgs/scala.svg';
import { ReactComponent as SoloLearnSvg } from 'assets/svgs/sololearn-2.svg';
import { ReactComponent as SwiftSvg } from 'assets/svgs/swift.svg';
import { ReactComponent as TerraformSvg } from 'assets/svgs/terraform.svg';
import { ReactComponent as ThreeJsSvg } from 'assets/svgs/three-js.svg';
import { ReactComponent as TypeScriptSvg } from 'assets/svgs/typescript.svg';
import { ReactComponent as VisualBasicSvg } from 'assets/svgs/visual-basic.svg';
import { ReactComponent as VisualStudioCodeSvg } from 'assets/svgs/visual-studio-code.svg';

import Text from 'components/Text';
import Link from 'components/Link';
import './index.css';

const toolUsed = (tool) => {

    tool = tool.split(",")[0].trim();
    switch (tool) {
        case 'Akka':
            return <AkkaSvg className='platform-icon' />;
        case 'Alfresco':
            return <AlfrescoSvg className='platform-icon' />;
        case 'Android':
            return <AndroidSvg className='platform-icon' />;
        case 'Angular':
            return <AngularSvg className='platform-icon' />;
        case 'Ansible':
            return <AnsibleSvg className='platform-icon' />;
        case 'Arduino':
            return <ArduinoSvg className='platform-icon' />;
        case 'ArgoCD':
            return <ArgoCDSvg className='platform-icon' />;
        case 'AWS':
            return <AwsSvg className='platform-icon' />;
        case 'AWS CloudWatch':
            return <AwsCloudWatchSvg className='platform-icon' />;
        case 'AWS Lambda':
            return <AwsLambdaSvg className='platform-icon' />;
        case 'Azure DevOps':
            return <AzureDevOpsSvg className='platform-icon' />;
        case 'Blender':
            return <BlenderSvg className='platform-icon' />;
        case 'C':
            return <CSvg className='platform-icon' />;
        case 'CSharp':
            return <CSharpSvg className='platform-icon' />;
        case 'Cpp':
            return <CppSvg className='platform-icon' />;
        case 'Docker':
            return <DockerSvg className='platform-icon' />;
        case 'ELK':
            return <ElkSvg className='platform-icon' />;
        case 'ESP32':
            return <Esp32Svg className='platform-icon' />;
        case 'ESP8266':
            return <Esp8266Svg className='platform-icon' />;
        case 'GitBook':
            return <GitBookSvg className='platform-icon' />;
        case 'GitHub Actions':
            return <GitActionsSvg className='platform-icon' />;
        case 'GitLab CI':
            return <GitLabSvg className='platform-icon' />;
        case 'Grafana':
            return <GrafanaSvg className='platform-icon' />;
        case 'Js HTML Css':
            return <HtmlJsCssSvg className='platform-icon' />;
        case 'Java':
            return <JavaSvg className='platform-icon' />;
        case 'Jenkins':
            return <JenkinsSvg className='platform-icon' />;
        case 'Julia':
            return <JuliaSvg className='platform-icon' />;
        case 'Kubernetes':
            return <KubernetesSvg className='platform-icon' />;
        case 'LoRa':
            return <LoRaSvg className='platform-icon' />;
        case 'NGINX':
            return <NginxSvg className='platform-icon' />;
        case 'OpenTelemetry':
            return <OpenTelemetrySvg className='platform-icon' />;
        case 'Packer':
            return <PackerSvg className='platform-icon' />;
        case 'Prometheus':
            return <PrometheusSvg className='platform-icon' />;
        case 'Python':
            return <PythonSvg className='platform-icon' />;
        case 'Raspberry Pi':
            return <RaspberryPiSvg className='platform-icon' />;
        case 'React':
            return <ReactSvg className='platform-icon' />;
        case 'ThreeJs':
            return <ThreeJsSvg className='platform-icon' />;
        case 'Terraform':
            return <TerraformSvg className='platform-icon' />;
        case 'TypeScript':
            return <TypeScriptSvg className='platform-icon' />;
        case 'VisualBasic':
            return <VisualBasicSvg className='platform-icon' />;
        case 'VisualStudioCode':
            return <VisualStudioCodeSvg className='platform-icon' />;
        case 'Php':
            return <PhpSvg className='platform-icon' />;
        case 'Ruby':
            return <RubySvg className='platform-icon' />;
        case 'Go':
            return <GoSvg className='platform-icon' />;
        case 'Kotlin':
            return <KotlinSvg className='platform-icon' />;
        case 'Scala':
            return <ScalaSvg className='platform-icon' />;
        case 'SoloLearn':
            return <SoloLearnSvg className='platform-icon' />;
        case 'Swift':
            return <SwiftSvg className='platform-icon' />;
        case 'Dart':
            return <DartSvg className='platform-icon' />;
        case 'Rust':
            return <RustSvg className='platform-icon' />;
        default:
            return null;
    }
};

const Project = ({ imgSrc, title, id, description, gitLink, siteLink, delay , majorTool }) => {
    const image = imageMap[imgSrc] || '';
    const animationDelay = `${delay}s`;
    return (
        <div className={classNames('tile', `project-${id}`, 'animate-fade-in')} style={{ animationDelay }}>
            <div className="text">
                <div className={classNames('animate-text', "project-links")}>
                    <div className="major-framework">
                        <h3 className="project-title">{title}</h3>
                        <p className="project-tool">{majorTool}</p>
                        {toolUsed(majorTool)}
                    </div>
                    <Link secondary href={gitLink} className="project-link git"> to Git </Link>
                </div>
            </div>
            <a href={siteLink} className="image">
                <img src={image} alt={title} />
                <Text secondary as="span" className={'project-description'}>
                    <strong>{description}</strong>
                </Text>
            </a>
        </div>
    );
};

export default Project;