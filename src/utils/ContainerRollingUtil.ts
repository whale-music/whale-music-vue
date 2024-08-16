import { nextTick } from "vue";
import { ScrollAreaViewport } from "radix-vue";

const scrollTo = async ({
  el,
  top,
}: {
  el: InstanceType<typeof ScrollAreaViewport> | undefined;
  top: number;
}) => {
  await nextTick();
  const viewport = el?.viewportElement;
  viewport?.scrollTo({
    top: top,
    behavior: "smooth",
  });
};

export const ContainerRollingUtil = {
  scrollTo,
};
