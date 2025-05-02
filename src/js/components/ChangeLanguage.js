import { useTranslation } from 'react-i18next';
import { Select, MenuItem } from '@mui/material';

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const currentLang = i18n.language;

    const handleChange = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    return (
        <Select
            value={currentLang}
            onChange={handleChange}
            variant="outlined"
            size="small"
        >
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="sk">Slovenský</MenuItem>
        </Select>
    );
}
