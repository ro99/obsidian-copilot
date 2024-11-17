import { DEFAULT_SYSTEM_PROMPT } from "@/constants";
import React from "react";
import { TextAreaComponent } from "./SettingBlocks";

interface AdvancedSettingsProps {
  userSystemPrompt: string;
  setUserSystemPrompt: (value: string) => void;
  extraModelParameters: string;
  setExtraModelParameters: (value: string) => void;
}

const AdvancedSettings: React.FC<AdvancedSettingsProps> = ({
  userSystemPrompt,
  setUserSystemPrompt,
  extraModelParameters,
  setExtraModelParameters,
}) => {
  return (
    <div>
      <br />
      <br />
      <h1>Advanced Settings</h1>
      <TextAreaComponent
        name="User System Prompt"
        description="Warning: It will override the default system prompt for all messages!"
        value={userSystemPrompt}
        onChange={setUserSystemPrompt}
        placeholder={userSystemPrompt || "Default: " + DEFAULT_SYSTEM_PROMPT}
        rows={10}
      />
      <TextAreaComponent
        name="Extra Model Parameters"
        description="Additional parameters in JSON format to send to the model. These parameters will override the existing ones."
        value={extraModelParameters}
        onChange={setExtraModelParameters}
        placeholder={extraModelParameters || "{}"}
        rows={10}
      />
    </div>
  );
};

export default AdvancedSettings;
