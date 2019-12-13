type OptionalHtmlElement<H extends HTMLElement> = H | null

export const $ = <H extends HTMLElement>(selector: string): OptionalHtmlElement<H> => {
    const elements = document.querySelector<HTMLElement>(selector);

    if (!elements) {
        return null;
    }

    return elements as H;
};

export const range = (upperBound: number): number[] => Array.from(Array(upperBound).keys());