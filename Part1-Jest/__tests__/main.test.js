const formatVolumeIconPath = require('../assets/scripts/main');
test('test return volume icon path', () => {
    expect(formatVolumeIconPath(67)).toContain('volume-level-3.svg');
    expect(formatVolumeIconPath(34)).toContain('volume-level-2.svg');
    expect(formatVolumeIconPath(1)).toContain('volume-level-1.svg');
    expect(formatVolumeIconPath(0)).toContain('volume-level-0.svg');
});

