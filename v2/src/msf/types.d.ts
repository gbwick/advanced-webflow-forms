// Params
export interface MSFParams {
  alertSelector?: string;
  alertText?: string;
  backSelector?: string;
  backText?: ButtonText[];
  completedPercentageSelector?: string;
  currentStepSelector?: string;
  formSelector: string;
  hiddeButtonsOnSubmit?: boolean;
  hiddenFormStep?: number;
  nextSelector: string;
  nextText?: ButtonText[];
  scrollTopOnStepChange?: boolean;
  sendHiddenForm?: boolean;
  warningClass?: string;
}

export interface ButtonText {
  step: number | string;
  text: string;
}

// DOM Elements
export type FormElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
export type SliderMaskElement = HTMLDivElement;
export type SliderElement = HTMLDivElement;
export type SlideElement = HTMLDivElement;
export type SliderDotElement = HTMLDivElement;
export type SliderArrow = HTMLDivElement;
