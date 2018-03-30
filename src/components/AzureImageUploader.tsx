import * as React from 'react';
import ImageUtility from '../lib/ImageUtility';
import { Segment, Form, Input, Label, Image, Message, Icon } from 'semantic-ui-react';
import * as config from '../config';

interface AzureImageUploaderProps {
  label: string;
  imageUrl: string;
  constraintWidth?: number;
  constraintHeight?: number;
  uploadPath: string;
  onChange: (imageUrl: string) => void;
  hiddenUrl?: boolean;
}

interface AzureImageUploaderState {
  isUploading: boolean;
  isShowError: boolean;
  errorMsg: string;
  imageUrl: string;
}

class AzureImageUploader extends React.Component<AzureImageUploaderProps, AzureImageUploaderState> {

  isNeedValidateDimension: boolean;
  fileValidateError: string;
  uploadError: string;

  constructor(props: AzureImageUploaderProps) {
    super(props);

    if ((props.constraintWidth) && (props.constraintHeight)) {
      this.isNeedValidateDimension = true;
      this.fileValidateError = 'ไฟล์ต้องเป็นนามสกุล .jpg หรือ .png และมีขนาด ' + props.constraintWidth + ' x ' + props.constraintHeight;
    }
    else {
      this.isNeedValidateDimension = false;
      this.fileValidateError = 'ไฟล์ต้องเป็นนามสกุล .jpg หรือ .png';
    }

    this.uploadError = 'อัพโหลดไม่สำเร็จ กรุณาลองใหม่อีกครั้ง';
    this.state = {
      isUploading: false,
      isShowError: false,
      errorMsg: '',
      imageUrl: props.imageUrl
    }
  }

  uploadFileToAzureBlobStorage(file: File): Promise<[boolean, string]> {
    return new Promise((resolve, reject) => {
      const AzureStorage: any = (window as any).AzureStorage;
      
      const blobService: any = AzureStorage.createBlobService(
        config.azureStorage.account, 
        config.azureStorage.accessKey, 
        config.azureStorage.host);
  
      const customBlockSize: number = file.size > 1024 * 1024 * 32 ? 1024 * 1024 * 4 : 1024 * 512;
      blobService.singleBlobPutThresholdInBytes = customBlockSize;
      
      blobService.createBlockBlobFromBrowserFile(config.azureStorage.container, 
        this.props.uploadPath + file.name, file, {blockSize : customBlockSize}, 
        (error: any, result: any, response: any) => {
          if (error) {
              // Upload blob failed
              resolve([false, '']);
          } else {
              // Upload successfully
              resolve([true, this.props.uploadPath + file.name]);
          }
      });
    });
  }

  async checkImageAndUpload(file: File) {
    let valid: boolean = await ImageUtility.isImageJPGOrPNG(file, this.props.constraintWidth, this.props.constraintHeight);
    if (!valid) {
      this.setState({
        isShowError: true,
        errorMsg: this.fileValidateError
      });
      return;
    }

    this.setState({
      isShowError: false,
      isUploading: true
    });

    let [success, name] = await this.uploadFileToAzureBlobStorage(file);
    if (!success) {
      this.setState({
        isUploading: false,
        isShowError: true,
        errorMsg: this.uploadError
      });
      return;
    }

    const imageUrl = config.azureStorage.host + '/' + config.azureStorage.container + '/' + name;
    this.setState({
      isUploading: false,
      isShowError: false,
      imageUrl: imageUrl
    });
    this.props.onChange(imageUrl);
  }

  handleFileChange = (event: any) => {
    const file: File = event.currentTarget.files[0];
    if (!file) {
      event.preventDefault();
      return;
    }
    this.checkImageAndUpload(file);
  }

  render() {
    let labelText: string = this.props.label;
    if (this.isNeedValidateDimension) {
      labelText += ' (ขนาด ' + this.props.constraintWidth + ' x ' + this.props.constraintHeight + ')';
    }
    return <Form.Field required>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
            <label>{labelText}</label>
            <Segment.Group>
              <Segment loading={this.state.isUploading}>
                <Label attached='top'>
                  {this.state.imageUrl && <Icon name="check"/>}
                  {!this.props.hiddenUrl && this.state.imageUrl}
                </Label>
                <Image size="medium" centered src={this.state.imageUrl}/>                   
              </Segment>
              <Input type="file" accept="image/jpeg,image/png" onChange={this.handleFileChange}/>
              {this.state.isShowError && <Message negative>{this.state.errorMsg}</Message>}
            </Segment.Group>
          </Form.Field>;
  }
}

export default AzureImageUploader;