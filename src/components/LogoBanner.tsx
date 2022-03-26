export default function LogoBanner({ orientation, color } = { orientation: 'row', color: '' }) {
    return (
        <div className={`flex flex-${orientation} items-center content-center`} style={{ margin: '0 auto' }}>
            <img className={`w-20 h-20`} src="/mm-512.png" alt="Mental Map Logo" />
            <h2 className={`${!color ? 'text-white' : color} text-uber font-bold text-3xl ${orientation === 'col' && 'mt-8'}`}>Mental Map</h2>
        </div>
    );
}